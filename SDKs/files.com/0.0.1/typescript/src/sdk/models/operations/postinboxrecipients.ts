import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostInboxRecipientsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=company" })
  company?: string;

  @Metadata({ data: "multipart_form, name=inbox_id" })
  inboxId: number;

  @Metadata({ data: "multipart_form, name=name" })
  name?: string;

  @Metadata({ data: "multipart_form, name=note" })
  note?: string;

  @Metadata({ data: "multipart_form, name=recipient" })
  recipient: string;

  @Metadata({ data: "multipart_form, name=share_after_create" })
  shareAfterCreate?: boolean;

  @Metadata({ data: "multipart_form, name=user_id" })
  userId?: number;
}


export class PostInboxRecipientsRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=multipart/form-data" })
  request?: PostInboxRecipientsRequestBody;
}


export class PostInboxRecipientsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  inboxRecipientEntity?: shared.InboxRecipientEntity;

  @Metadata()
  statusCode: number;
}
