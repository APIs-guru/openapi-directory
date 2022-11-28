import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostBundleRecipientsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=bundle_id" })
  bundleId: number;

  @SpeakeasyMetadata({ data: "multipart_form, name=company" })
  company?: string;

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


export class PostBundleRecipientsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: PostBundleRecipientsRequestBody;
}


export class PostBundleRecipientsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bundleRecipientEntity?: shared.BundleRecipientEntity;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
