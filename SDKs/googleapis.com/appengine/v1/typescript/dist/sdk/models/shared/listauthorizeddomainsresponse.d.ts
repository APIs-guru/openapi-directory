import { SpeakeasyBase } from "../../../internal/utils";
import { AuthorizedDomain } from "./authorizeddomain";
/**
 * Response message for AuthorizedDomains.ListAuthorizedDomains.
**/
export declare class ListAuthorizedDomainsResponse extends SpeakeasyBase {
    domains?: AuthorizedDomain[];
    nextPageToken?: string;
}
