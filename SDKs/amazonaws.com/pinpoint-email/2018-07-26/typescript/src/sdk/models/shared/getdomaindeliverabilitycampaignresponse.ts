import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DomainDeliverabilityCampaign } from "./domaindeliverabilitycampaign";


// GetDomainDeliverabilityCampaignResponse
/** 
 * An object that contains all the deliverability data for a specific campaign. This data is available for a campaign only if the campaign sent email by using a domain that the Deliverability dashboard is enabled for (<code>PutDeliverabilityDashboardOption</code> operation).
**/
export class GetDomainDeliverabilityCampaignResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=DomainDeliverabilityCampaign" })
  domainDeliverabilityCampaign: DomainDeliverabilityCampaign;
}
