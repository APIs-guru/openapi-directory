import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Page
/** 
 * Incident Manager engaging a contact's contact channel.
**/
export class Page extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContactArn" })
  contactArn: string;

  @SpeakeasyMetadata({ data: "json, name=DeliveryTime" })
  deliveryTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=EngagementArn" })
  engagementArn: string;

  @SpeakeasyMetadata({ data: "json, name=IncidentId" })
  incidentId?: string;

  @SpeakeasyMetadata({ data: "json, name=PageArn" })
  pageArn: string;

  @SpeakeasyMetadata({ data: "json, name=ReadTime" })
  readTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Sender" })
  sender: string;

  @SpeakeasyMetadata({ data: "json, name=SentTime" })
  sentTime?: Date;
}
