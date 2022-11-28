import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostInboxRecipientsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=company" })
  company?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=inbox_id" })
  inboxId: number;

  @SpeakeasyMetadata({ data: "multipart_form, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=note" })
  note?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=recipient" })
  recipient: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=share_after_create" })
  shareAfterCreate?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=user_id" })
  userId?: number;
}


export class PostInboxRecipientsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: PostInboxRecipientsRequestBody;
}


export class PostInboxRecipientsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  inboxRecipientEntity?: shared.InboxRecipientEntity;

  @SpeakeasyMetadata()
  statusCode: number;
}
