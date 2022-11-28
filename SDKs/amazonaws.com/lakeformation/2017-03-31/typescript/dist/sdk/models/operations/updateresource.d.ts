import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateResourceXAmzTargetEnum {
    AwsLakeFormationUpdateResource = "AWSLakeFormation.UpdateResource"
}
export declare class UpdateResourceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateResourceXAmzTargetEnum;
}
export declare class UpdateResourceRequest extends SpeakeasyBase {
    headers: UpdateResourceHeaders;
    request: shared.UpdateResourceRequest;
}
export declare class UpdateResourceResponse extends SpeakeasyBase {
    contentType: string;
    entityNotFoundException?: any;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    statusCode: number;
    updateResourceResponse?: Map<string, any>;
}
