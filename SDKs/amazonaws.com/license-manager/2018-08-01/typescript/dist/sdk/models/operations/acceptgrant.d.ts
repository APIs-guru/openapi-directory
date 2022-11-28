import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AcceptGrantXAmzTargetEnum {
    AwsLicenseManagerAcceptGrant = "AWSLicenseManager.AcceptGrant"
}
export declare class AcceptGrantHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AcceptGrantXAmzTargetEnum;
}
export declare class AcceptGrantRequest extends SpeakeasyBase {
    headers: AcceptGrantHeaders;
    request: shared.AcceptGrantRequest;
}
export declare class AcceptGrantResponse extends SpeakeasyBase {
    acceptGrantResponse?: shared.AcceptGrantResponse;
    accessDeniedException?: any;
    authorizationException?: any;
    contentType: string;
    invalidParameterValueException?: any;
    rateLimitExceededException?: any;
    resourceLimitExceededException?: any;
    serverInternalException?: any;
    statusCode: number;
    validationException?: any;
}
