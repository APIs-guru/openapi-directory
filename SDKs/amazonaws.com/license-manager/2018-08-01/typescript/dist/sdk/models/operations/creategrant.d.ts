import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateGrantXAmzTargetEnum {
    AwsLicenseManagerCreateGrant = "AWSLicenseManager.CreateGrant"
}
export declare class CreateGrantHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateGrantXAmzTargetEnum;
}
export declare class CreateGrantRequest extends SpeakeasyBase {
    headers: CreateGrantHeaders;
    request: shared.CreateGrantRequest;
}
export declare class CreateGrantResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    authorizationException?: any;
    contentType: string;
    createGrantResponse?: shared.CreateGrantResponse;
    invalidParameterValueException?: any;
    rateLimitExceededException?: any;
    resourceLimitExceededException?: any;
    serverInternalException?: any;
    statusCode: number;
    validationException?: any;
}
