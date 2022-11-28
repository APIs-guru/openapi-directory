import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribePageResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContactArn" })
  contactArn: string;

  @SpeakeasyMetadata({ data: "json, name=Content" })
  content: string;

  @SpeakeasyMetadata({ data: "json, name=DeliveryTime" })
  deliveryTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=EngagementArn" })
  engagementArn: string;

  @SpeakeasyMetadata({ data: "json, name=IncidentId" })
  incidentId?: string;

  @SpeakeasyMetadata({ data: "json, name=PageArn" })
  pageArn: string;

  @SpeakeasyMetadata({ data: "json, name=PublicContent" })
  publicContent?: string;

  @SpeakeasyMetadata({ data: "json, name=PublicSubject" })
  publicSubject?: string;

  @SpeakeasyMetadata({ data: "json, name=ReadTime" })
  readTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Sender" })
  sender: string;

  @SpeakeasyMetadata({ data: "json, name=SentTime" })
  sentTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Subject" })
  subject: string;
}
