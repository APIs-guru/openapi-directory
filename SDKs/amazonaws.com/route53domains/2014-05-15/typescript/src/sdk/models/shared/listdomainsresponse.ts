import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DomainSummary } from "./domainsummary";


// ListDomainsResponse
/** 
 * The ListDomains response includes the following elements.
**/
export class ListDomainsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Domains", elemType: shared.DomainSummary })
  domains: DomainSummary[];

  @Metadata({ data: "json, name=NextPageMarker" })
  nextPageMarker?: string;
}
