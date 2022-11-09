import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IdentityAwareProxy
/** 
 * Identity-Aware Proxy
**/
export class IdentityAwareProxy extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=oauth2ClientId" })
  oauth2ClientId?: string;

  @Metadata({ data: "json, name=oauth2ClientSecret" })
  oauth2ClientSecret?: string;

  @Metadata({ data: "json, name=oauth2ClientSecretSha256" })
  oauth2ClientSecretSha256?: string;
}
