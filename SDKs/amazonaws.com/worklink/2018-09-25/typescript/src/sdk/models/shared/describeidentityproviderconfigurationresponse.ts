import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IdentityProviderTypeEnum } from "./identityprovidertypeenum";



export class DescribeIdentityProviderConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IdentityProviderSamlMetadata" })
  identityProviderSamlMetadata?: string;

  @SpeakeasyMetadata({ data: "json, name=IdentityProviderType" })
  identityProviderType?: IdentityProviderTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=ServiceProviderSamlMetadata" })
  serviceProviderSamlMetadata?: string;
}
