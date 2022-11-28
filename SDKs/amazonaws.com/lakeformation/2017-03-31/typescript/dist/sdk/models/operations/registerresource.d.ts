import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum RegisterResourceXAmzTargetEnum {
    AwsLakeFormationRegisterResource = "AWSLakeFormation.RegisterResource"
}
export declare class RegisterResourceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RegisterResourceXAmzTargetEnum;
}
export declare class RegisterResourceRequest extends SpeakeasyBase {
    headers: RegisterResourceHeaders;
    request: shared.RegisterResourceRequest;
}
export declare class RegisterResourceResponse extends SpeakeasyBase {
    alreadyExistsException?: any;
    contentType: string;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    registerResourceResponse?: Map<string, any>;
    statusCode: number;
}
