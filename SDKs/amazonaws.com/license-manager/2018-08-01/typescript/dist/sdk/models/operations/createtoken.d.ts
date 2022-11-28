import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateTokenXAmzTargetEnum {
    AwsLicenseManagerCreateToken = "AWSLicenseManager.CreateToken"
}
export declare class CreateTokenHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateTokenXAmzTargetEnum;
}
export declare class CreateTokenRequest extends SpeakeasyBase {
    headers: CreateTokenHeaders;
    request: shared.CreateTokenRequest;
}
export declare class CreateTokenResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    authorizationException?: any;
    contentType: string;
    createTokenResponse?: shared.CreateTokenResponse;
    rateLimitExceededException?: any;
    redirectException?: any;
    resourceLimitExceededException?: any;
    resourceNotFoundException?: any;
    serverInternalException?: any;
    statusCode: number;
    validationException?: any;
}
