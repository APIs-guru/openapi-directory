import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteGrantXAmzTargetEnum {
    AwsLicenseManagerDeleteGrant = "AWSLicenseManager.DeleteGrant"
}
export declare class DeleteGrantHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteGrantXAmzTargetEnum;
}
export declare class DeleteGrantRequest extends SpeakeasyBase {
    headers: DeleteGrantHeaders;
    request: shared.DeleteGrantRequest;
}
export declare class DeleteGrantResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    authorizationException?: any;
    contentType: string;
    deleteGrantResponse?: shared.DeleteGrantResponse;
    invalidParameterValueException?: any;
    rateLimitExceededException?: any;
    resourceLimitExceededException?: any;
    serverInternalException?: any;
    statusCode: number;
    validationException?: any;
}
