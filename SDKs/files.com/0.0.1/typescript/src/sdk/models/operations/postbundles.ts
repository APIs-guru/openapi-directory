import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostBundlesRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=clickwrap_id" })
  clickwrapId?: number;

  @SpeakeasyMetadata({ data: "multipart_form, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=expires_at" })
  expiresAt?: Date;

  @SpeakeasyMetadata({ data: "multipart_form, name=form_field_set_id" })
  formFieldSetId?: number;

  @SpeakeasyMetadata({ data: "multipart_form, name=inbox_id" })
  inboxId?: number;

  @SpeakeasyMetadata({ data: "multipart_form, name=max_uses" })
  maxUses?: number;

  @SpeakeasyMetadata({ data: "multipart_form, name=note" })
  note?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=paths" })
  paths: string[];

  @SpeakeasyMetadata({ data: "multipart_form, name=preview_only" })
  previewOnly?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=require_registration" })
  requireRegistration?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=require_share_recipient" })
  requireShareRecipient?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=user_id" })
  userId?: number;
}


export class PostBundlesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: PostBundlesRequestBody;
}


export class PostBundlesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bundleEntity?: shared.BundleEntity;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
