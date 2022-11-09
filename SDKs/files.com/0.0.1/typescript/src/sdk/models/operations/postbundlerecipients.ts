import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostBundleRecipientsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=bundle_id" })
  bundleId: number;

  @Metadata({ data: "multipart_form, name=company" })
  company?: string;

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


export class PostBundleRecipientsRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=multipart/form-data" })
  request?: PostBundleRecipientsRequestBody;
}


export class PostBundleRecipientsResponse extends SpeakeasyBase {
  @Metadata()
  bundleRecipientEntity?: shared.BundleRecipientEntity;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
