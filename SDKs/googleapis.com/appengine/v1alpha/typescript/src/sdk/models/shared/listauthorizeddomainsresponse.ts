import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AuthorizedDomain } from "./authorizeddomain";



// ListAuthorizedDomainsResponse
/** 
 * Response message for AuthorizedDomains.ListAuthorizedDomains.
**/
export class ListAuthorizedDomainsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=domains", elemType: AuthorizedDomain })
  domains?: AuthorizedDomain[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
