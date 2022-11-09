import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EnterpriseAuthenticationAppLinkConfig
/** 
 * An authentication URL configuration for the authenticator app of an identity provider.
**/
export class EnterpriseAuthenticationAppLinkConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
