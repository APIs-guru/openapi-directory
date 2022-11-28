import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteTokenXAmzTargetEnum {
    AwsLicenseManagerDeleteToken = "AWSLicenseManager.DeleteToken"
}
export declare class DeleteTokenHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteTokenXAmzTargetEnum;
}
export declare class DeleteTokenRequest extends SpeakeasyBase {
    headers: DeleteTokenHeaders;
    request: shared.DeleteTokenRequest;
}
export declare class DeleteTokenResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    authorizationException?: any;
    contentType: string;
    deleteTokenResponse?: Map<string, any>;
    rateLimitExceededException?: any;
    redirectException?: any;
    resourceNotFoundException?: any;
    serverInternalException?: any;
    statusCode: number;
    validationException?: any;
}
