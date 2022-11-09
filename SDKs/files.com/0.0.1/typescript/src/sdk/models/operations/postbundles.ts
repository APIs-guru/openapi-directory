import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostBundlesRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=clickwrap_id" })
  clickwrapId?: number;

  @Metadata({ data: "multipart_form, name=code" })
  code?: string;

  @Metadata({ data: "multipart_form, name=description" })
  description?: string;

  @Metadata({ data: "multipart_form, name=expires_at" })
  expiresAt?: Date;

  @Metadata({ data: "multipart_form, name=form_field_set_id" })
  formFieldSetId?: number;

  @Metadata({ data: "multipart_form, name=inbox_id" })
  inboxId?: number;

  @Metadata({ data: "multipart_form, name=max_uses" })
  maxUses?: number;

  @Metadata({ data: "multipart_form, name=note" })
  note?: string;

  @Metadata({ data: "multipart_form, name=password" })
  password?: string;

  @Metadata({ data: "multipart_form, name=paths" })
  paths: string[];

  @Metadata({ data: "multipart_form, name=preview_only" })
  previewOnly?: boolean;

  @Metadata({ data: "multipart_form, name=require_registration" })
  requireRegistration?: boolean;

  @Metadata({ data: "multipart_form, name=require_share_recipient" })
  requireShareRecipient?: boolean;

  @Metadata({ data: "multipart_form, name=user_id" })
  userId?: number;
}


export class PostBundlesRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=multipart/form-data" })
  request?: PostBundlesRequestBody;
}


export class PostBundlesResponse extends SpeakeasyBase {
  @Metadata()
  bundleEntity?: shared.BundleEntity;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
