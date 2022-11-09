import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeEngagementResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=ContactArn" })
  contactArn: string;

  @Metadata({ data: "json, name=Content" })
  content: string;

  @Metadata({ data: "json, name=EngagementArn" })
  engagementArn: string;

  @Metadata({ data: "json, name=IncidentId" })
  incidentId?: string;

  @Metadata({ data: "json, name=PublicContent" })
  publicContent?: string;

  @Metadata({ data: "json, name=PublicSubject" })
  publicSubject?: string;

  @Metadata({ data: "json, name=Sender" })
  sender: string;

  @Metadata({ data: "json, name=StartTime" })
  startTime?: Date;

  @Metadata({ data: "json, name=StopTime" })
  stopTime?: Date;

  @Metadata({ data: "json, name=Subject" })
  subject: string;
}
