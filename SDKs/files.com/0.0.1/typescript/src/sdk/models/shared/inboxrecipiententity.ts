import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InboxRecipientEntity
/** 
 * List Inbox Recipients
**/
export class InboxRecipientEntity extends SpeakeasyBase {
  @Metadata({ data: "json, name=company" })
  company?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=note" })
  note?: string;

  @Metadata({ data: "json, name=recipient" })
  recipient?: string;

  @Metadata({ data: "json, name=sent_at" })
  sentAt?: Date;
}
