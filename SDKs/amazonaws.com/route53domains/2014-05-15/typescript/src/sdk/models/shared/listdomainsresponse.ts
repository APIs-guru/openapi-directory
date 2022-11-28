import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DomainSummary } from "./domainsummary";



// ListDomainsResponse
/** 
 * The ListDomains response includes the following elements.
**/
export class ListDomainsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Domains", elemType: DomainSummary })
  domains: DomainSummary[];

  @SpeakeasyMetadata({ data: "json, name=NextPageMarker" })
  nextPageMarker?: string;
}
