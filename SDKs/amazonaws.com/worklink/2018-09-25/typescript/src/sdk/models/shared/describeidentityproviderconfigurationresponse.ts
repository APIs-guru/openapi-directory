import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { IdentityProviderTypeEnum } from "./identityprovidertypeenum";


export class DescribeIdentityProviderConfigurationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=IdentityProviderSamlMetadata" })
  identityProviderSamlMetadata?: string;

  @Metadata({ data: "json, name=IdentityProviderType" })
  identityProviderType?: IdentityProviderTypeEnum;

  @Metadata({ data: "json, name=ServiceProviderSamlMetadata" })
  serviceProviderSamlMetadata?: string;
}
