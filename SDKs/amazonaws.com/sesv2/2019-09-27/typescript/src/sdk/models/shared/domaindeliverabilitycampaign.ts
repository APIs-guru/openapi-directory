import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DomainDeliverabilityCampaign
/** 
 * An object that contains the deliverability data for a specific campaign. This data is available for a campaign only if the campaign sent email by using a domain that the Deliverability dashboard is enabled for (<code>PutDeliverabilityDashboardOption</code> operation).
**/
export class DomainDeliverabilityCampaign extends SpeakeasyBase {
  @Metadata({ data: "json, name=CampaignId" })
  campaignId?: string;

  @Metadata({ data: "json, name=DeleteRate" })
  deleteRate?: number;

  @Metadata({ data: "json, name=Esps" })
  esps?: string[];

  @Metadata({ data: "json, name=FirstSeenDateTime" })
  firstSeenDateTime?: Date;

  @Metadata({ data: "json, name=FromAddress" })
  fromAddress?: string;

  @Metadata({ data: "json, name=ImageUrl" })
  imageUrl?: string;

  @Metadata({ data: "json, name=InboxCount" })
  inboxCount?: number;

  @Metadata({ data: "json, name=LastSeenDateTime" })
  lastSeenDateTime?: Date;

  @Metadata({ data: "json, name=ProjectedVolume" })
  projectedVolume?: number;

  @Metadata({ data: "json, name=ReadDeleteRate" })
  readDeleteRate?: number;

  @Metadata({ data: "json, name=ReadRate" })
  readRate?: number;

  @Metadata({ data: "json, name=SendingIps" })
  sendingIps?: string[];

  @Metadata({ data: "json, name=SpamCount" })
  spamCount?: number;

  @Metadata({ data: "json, name=Subject" })
  subject?: string;
}
