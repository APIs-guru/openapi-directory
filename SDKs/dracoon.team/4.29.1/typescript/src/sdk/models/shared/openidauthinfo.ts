import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OpenIdProvider } from "./openidprovider";



// OpenIdAuthInfo
/** 
 * List of OpenID Connect providers
**/
export class OpenIdAuthInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: OpenIdProvider })
  items: OpenIdProvider[];
}
