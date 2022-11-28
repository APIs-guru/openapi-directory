import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OpenIdProvider } from "./openidprovider";



// OpenIdAuthResources
/** 
 * List of OpenID Connect providers
**/
export class OpenIdAuthResources extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=openIdProviders", elemType: OpenIdProvider })
  openIdProviders: OpenIdProvider[];
}
