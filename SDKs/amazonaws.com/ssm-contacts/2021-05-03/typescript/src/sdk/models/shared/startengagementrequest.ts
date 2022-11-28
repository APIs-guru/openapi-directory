import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StartEngagementRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContactId" })
  contactId: string;

  @SpeakeasyMetadata({ data: "json, name=Content" })
  content: string;

  @SpeakeasyMetadata({ data: "json, name=IdempotencyToken" })
  idempotencyToken?: string;

  @SpeakeasyMetadata({ data: "json, name=IncidentId" })
  incidentId?: string;

  @SpeakeasyMetadata({ data: "json, name=PublicContent" })
  publicContent?: string;

  @SpeakeasyMetadata({ data: "json, name=PublicSubject" })
  publicSubject?: string;

  @SpeakeasyMetadata({ data: "json, name=Sender" })
  sender: string;

  @SpeakeasyMetadata({ data: "json, name=Subject" })
  subject: string;
}
