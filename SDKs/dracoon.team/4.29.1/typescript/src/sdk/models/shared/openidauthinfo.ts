import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OpenIdProvider } from "./openidprovider";


// OpenIdAuthInfo
/** 
 * List of OpenID Connect providers
**/
export class OpenIdAuthInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.OpenIdProvider })
  items: OpenIdProvider[];
}
