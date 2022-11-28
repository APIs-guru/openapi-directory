import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InboxRegistrationEntity } from "./inboxregistrationentity";



// InboxUploadEntity
/** 
 * List Inbox Uploads
**/
export class InboxUploadEntity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=inbox_registration" })
  inboxRegistration?: InboxRegistrationEntity;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;
}
