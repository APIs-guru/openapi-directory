import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EnterpriseAuthenticationAppLinkConfig
/** 
 * An authentication URL configuration for the authenticator app of an identity provider.
**/
export class EnterpriseAuthenticationAppLinkConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
