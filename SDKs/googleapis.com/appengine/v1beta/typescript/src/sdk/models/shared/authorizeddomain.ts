import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AuthorizedDomain
/** 
 * A domain that a user has been authorized to administer. To authorize use of a domain, verify ownership via Webmaster Central (https://www.google.com/webmasters/verification/home).
**/
export class AuthorizedDomain extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
