import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetGrantXAmzTargetEnum {
    AwsLicenseManagerGetGrant = "AWSLicenseManager.GetGrant"
}
export declare class GetGrantHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetGrantXAmzTargetEnum;
}
export declare class GetGrantRequest extends SpeakeasyBase {
    headers: GetGrantHeaders;
    request: shared.GetGrantRequest;
}
export declare class GetGrantResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    authorizationException?: any;
    contentType: string;
    getGrantResponse?: shared.GetGrantResponse;
    invalidParameterValueException?: any;
    rateLimitExceededException?: any;
    resourceLimitExceededException?: any;
    serverInternalException?: any;
    statusCode: number;
    validationException?: any;
}
