import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AssociateWebsiteAuthorizationProviderHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum AssociateWebsiteAuthorizationProviderRequestBodyAuthorizationProviderTypeEnum {
    Saml = "SAML"
}
export declare class AssociateWebsiteAuthorizationProviderRequestBody extends SpeakeasyBase {
    authorizationProviderType: AssociateWebsiteAuthorizationProviderRequestBodyAuthorizationProviderTypeEnum;
    domainName?: string;
    fleetArn: string;
}
export declare class AssociateWebsiteAuthorizationProviderRequest extends SpeakeasyBase {
    headers: AssociateWebsiteAuthorizationProviderHeaders;
    request: AssociateWebsiteAuthorizationProviderRequestBody;
}
export declare class AssociateWebsiteAuthorizationProviderResponse extends SpeakeasyBase {
    associateWebsiteAuthorizationProviderResponse?: shared.AssociateWebsiteAuthorizationProviderResponse;
    contentType: string;
    internalServerErrorException?: any;
    invalidRequestException?: any;
    resourceAlreadyExistsException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
