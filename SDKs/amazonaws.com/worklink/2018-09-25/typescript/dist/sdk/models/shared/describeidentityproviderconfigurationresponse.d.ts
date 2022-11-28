import { SpeakeasyBase } from "../../../internal/utils";
import { IdentityProviderTypeEnum } from "./identityprovidertypeenum";
export declare class DescribeIdentityProviderConfigurationResponse extends SpeakeasyBase {
    identityProviderSamlMetadata?: string;
    identityProviderType?: IdentityProviderTypeEnum;
    serviceProviderSamlMetadata?: string;
}
