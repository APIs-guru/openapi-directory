import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum RejectGrantXAmzTargetEnum {
    AwsLicenseManagerRejectGrant = "AWSLicenseManager.RejectGrant"
}
export declare class RejectGrantHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RejectGrantXAmzTargetEnum;
}
export declare class RejectGrantRequest extends SpeakeasyBase {
    headers: RejectGrantHeaders;
    request: shared.RejectGrantRequest;
}
export declare class RejectGrantResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    authorizationException?: any;
    contentType: string;
    invalidParameterValueException?: any;
    rateLimitExceededException?: any;
    rejectGrantResponse?: shared.RejectGrantResponse;
    resourceLimitExceededException?: any;
    serverInternalException?: any;
    statusCode: number;
    validationException?: any;
}
