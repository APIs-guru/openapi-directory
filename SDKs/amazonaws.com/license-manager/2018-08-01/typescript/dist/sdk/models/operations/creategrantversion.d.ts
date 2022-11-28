import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateGrantVersionXAmzTargetEnum {
    AwsLicenseManagerCreateGrantVersion = "AWSLicenseManager.CreateGrantVersion"
}
export declare class CreateGrantVersionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateGrantVersionXAmzTargetEnum;
}
export declare class CreateGrantVersionRequest extends SpeakeasyBase {
    headers: CreateGrantVersionHeaders;
    request: shared.CreateGrantVersionRequest;
}
export declare class CreateGrantVersionResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    authorizationException?: any;
    contentType: string;
    createGrantVersionResponse?: shared.CreateGrantVersionResponse;
    invalidParameterValueException?: any;
    rateLimitExceededException?: any;
    resourceLimitExceededException?: any;
    serverInternalException?: any;
    statusCode: number;
    validationException?: any;
}
