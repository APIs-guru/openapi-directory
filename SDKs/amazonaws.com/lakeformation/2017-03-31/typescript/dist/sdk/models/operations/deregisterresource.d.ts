import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeregisterResourceXAmzTargetEnum {
    AwsLakeFormationDeregisterResource = "AWSLakeFormation.DeregisterResource"
}
export declare class DeregisterResourceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeregisterResourceXAmzTargetEnum;
}
export declare class DeregisterResourceRequest extends SpeakeasyBase {
    headers: DeregisterResourceHeaders;
    request: shared.DeregisterResourceRequest;
}
export declare class DeregisterResourceResponse extends SpeakeasyBase {
    contentType: string;
    deregisterResourceResponse?: Map<string, any>;
    entityNotFoundException?: any;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    statusCode: number;
}
