import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OpenIdProvider } from "./openidprovider";


// OpenIdAuthResources
/** 
 * List of OpenID Connect providers
**/
export class OpenIdAuthResources extends SpeakeasyBase {
  @Metadata({ data: "json, name=openIdProviders", elemType: shared.OpenIdProvider })
  openIdProviders: OpenIdProvider[];
}
