import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StartEngagementRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ContactId" })
  contactId: string;

  @Metadata({ data: "json, name=Content" })
  content: string;

  @Metadata({ data: "json, name=IdempotencyToken" })
  idempotencyToken?: string;

  @Metadata({ data: "json, name=IncidentId" })
  incidentId?: string;

  @Metadata({ data: "json, name=PublicContent" })
  publicContent?: string;

  @Metadata({ data: "json, name=PublicSubject" })
  publicSubject?: string;

  @Metadata({ data: "json, name=Sender" })
  sender: string;

  @Metadata({ data: "json, name=Subject" })
  subject: string;
}
