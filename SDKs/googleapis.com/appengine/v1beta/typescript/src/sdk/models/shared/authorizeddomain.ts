import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AuthorizedDomain
/** 
 * A domain that a user has been authorized to administer. To authorize use of a domain, verify ownership via Webmaster Central (https://www.google.com/webmasters/verification/home).
**/
export class AuthorizedDomain extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
