import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DomainDeliverabilityCampaign
/** 
 * An object that contains the deliverability data for a specific campaign. This data is available for a campaign only if the campaign sent email by using a domain that the Deliverability dashboard is enabled for (<code>PutDeliverabilityDashboardOption</code> operation).
**/
export class DomainDeliverabilityCampaign extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CampaignId" })
  campaignId?: string;

  @SpeakeasyMetadata({ data: "json, name=DeleteRate" })
  deleteRate?: number;

  @SpeakeasyMetadata({ data: "json, name=Esps" })
  esps?: string[];

  @SpeakeasyMetadata({ data: "json, name=FirstSeenDateTime" })
  firstSeenDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=FromAddress" })
  fromAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=ImageUrl" })
  imageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=InboxCount" })
  inboxCount?: number;

  @SpeakeasyMetadata({ data: "json, name=LastSeenDateTime" })
  lastSeenDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=ProjectedVolume" })
  projectedVolume?: number;

  @SpeakeasyMetadata({ data: "json, name=ReadDeleteRate" })
  readDeleteRate?: number;

  @SpeakeasyMetadata({ data: "json, name=ReadRate" })
  readRate?: number;

  @SpeakeasyMetadata({ data: "json, name=SendingIps" })
  sendingIps?: string[];

  @SpeakeasyMetadata({ data: "json, name=SpamCount" })
  spamCount?: number;

  @SpeakeasyMetadata({ data: "json, name=Subject" })
  subject?: string;
}
