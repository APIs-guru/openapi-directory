import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IdentityAwareProxy
/** 
 * Identity-Aware Proxy
**/
export class IdentityAwareProxy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=oauth2ClientId" })
  oauth2ClientId?: string;

  @SpeakeasyMetadata({ data: "json, name=oauth2ClientSecret" })
  oauth2ClientSecret?: string;

  @SpeakeasyMetadata({ data: "json, name=oauth2ClientSecretSha256" })
  oauth2ClientSecretSha256?: string;
}
