import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InboxRegistrationEntity } from "./inboxregistrationentity";


// InboxUploadEntity
/** 
 * List Inbox Uploads
**/
export class InboxUploadEntity extends SpeakeasyBase {
  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=inbox_registration" })
  inboxRegistration?: InboxRegistrationEntity;

  @Metadata({ data: "json, name=path" })
  path?: string;
}
