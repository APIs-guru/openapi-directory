import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DomainDeliverabilityCampaign } from "./domaindeliverabilitycampaign";


// ListDomainDeliverabilityCampaignsResponse
/** 
 * An array of objects that provide deliverability data for all the campaigns that used a specific domain to send email during a specified time range. This data is available for a domain only if you enabled the Deliverability dashboard (<code>PutDeliverabilityDashboardOption</code> operation) for the domain.
**/
export class ListDomainDeliverabilityCampaignsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=DomainDeliverabilityCampaigns", elemType: shared.DomainDeliverabilityCampaign })
  domainDeliverabilityCampaigns: DomainDeliverabilityCampaign[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
