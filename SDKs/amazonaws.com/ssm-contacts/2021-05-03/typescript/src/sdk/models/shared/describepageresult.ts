import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribePageResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=ContactArn" })
  contactArn: string;

  @Metadata({ data: "json, name=Content" })
  content: string;

  @Metadata({ data: "json, name=DeliveryTime" })
  deliveryTime?: Date;

  @Metadata({ data: "json, name=EngagementArn" })
  engagementArn: string;

  @Metadata({ data: "json, name=IncidentId" })
  incidentId?: string;

  @Metadata({ data: "json, name=PageArn" })
  pageArn: string;

  @Metadata({ data: "json, name=PublicContent" })
  publicContent?: string;

  @Metadata({ data: "json, name=PublicSubject" })
  publicSubject?: string;

  @Metadata({ data: "json, name=ReadTime" })
  readTime?: Date;

  @Metadata({ data: "json, name=Sender" })
  sender: string;

  @Metadata({ data: "json, name=SentTime" })
  sentTime?: Date;

  @Metadata({ data: "json, name=Subject" })
  subject: string;
}
