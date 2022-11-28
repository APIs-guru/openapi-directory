import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetAccessTokenXAmzTargetEnum {
    AwsLicenseManagerGetAccessToken = "AWSLicenseManager.GetAccessToken"
}
export declare class GetAccessTokenHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetAccessTokenXAmzTargetEnum;
}
export declare class GetAccessTokenRequest extends SpeakeasyBase {
    headers: GetAccessTokenHeaders;
    request: shared.GetAccessTokenRequest;
}
export declare class GetAccessTokenResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    authorizationException?: any;
    contentType: string;
    getAccessTokenResponse?: shared.GetAccessTokenResponse;
    rateLimitExceededException?: any;
    serverInternalException?: any;
    statusCode: number;
    validationException?: any;
}
