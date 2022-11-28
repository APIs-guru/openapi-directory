import { SpeakeasyBase } from "../../../internal/utils";
import { DomainDeliverabilityCampaign } from "./domaindeliverabilitycampaign";
/**
 * An array of objects that provide deliverability data for all the campaigns that used a specific domain to send email during a specified time range. This data is available for a domain only if you enabled the Deliverability dashboard (<code>PutDeliverabilityDashboardOption</code> operation) for the domain.
**/
export declare class ListDomainDeliverabilityCampaignsResponse extends SpeakeasyBase {
    domainDeliverabilityCampaigns: DomainDeliverabilityCampaign[];
    nextToken?: string;
}
