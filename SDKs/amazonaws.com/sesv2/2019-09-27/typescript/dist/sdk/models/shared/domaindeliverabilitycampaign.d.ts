import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An object that contains the deliverability data for a specific campaign. This data is available for a campaign only if the campaign sent email by using a domain that the Deliverability dashboard is enabled for (<code>PutDeliverabilityDashboardOption</code> operation).
**/
export declare class DomainDeliverabilityCampaign extends SpeakeasyBase {
    campaignId?: string;
    deleteRate?: number;
    esps?: string[];
    firstSeenDateTime?: Date;
    fromAddress?: string;
    imageUrl?: string;
    inboxCount?: number;
    lastSeenDateTime?: Date;
    projectedVolume?: number;
    readDeleteRate?: number;
    readRate?: number;
    sendingIps?: string[];
    spamCount?: number;
    subject?: string;
}
