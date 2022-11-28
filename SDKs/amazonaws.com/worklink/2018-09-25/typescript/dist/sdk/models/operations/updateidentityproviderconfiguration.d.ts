import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateIdentityProviderConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum UpdateIdentityProviderConfigurationRequestBodyIdentityProviderTypeEnum {
    Saml = "SAML"
}
export declare class UpdateIdentityProviderConfigurationRequestBody extends SpeakeasyBase {
    fleetArn: string;
    identityProviderSamlMetadata?: string;
    identityProviderType: UpdateIdentityProviderConfigurationRequestBodyIdentityProviderTypeEnum;
}
export declare class UpdateIdentityProviderConfigurationRequest extends SpeakeasyBase {
    headers: UpdateIdentityProviderConfigurationHeaders;
    request: UpdateIdentityProviderConfigurationRequestBody;
}
export declare class UpdateIdentityProviderConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    internalServerErrorException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
    updateIdentityProviderConfigurationResponse?: Map<string, any>;
}
