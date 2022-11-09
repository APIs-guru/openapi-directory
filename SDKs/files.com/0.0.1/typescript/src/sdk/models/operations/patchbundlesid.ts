import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PatchBundlesIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PatchBundlesIdRequestBody extends SpeakeasyBase {
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
  paths?: string[];

  @Metadata({ data: "multipart_form, name=preview_only" })
  previewOnly?: boolean;

  @Metadata({ data: "multipart_form, name=require_registration" })
  requireRegistration?: boolean;

  @Metadata({ data: "multipart_form, name=require_share_recipient" })
  requireShareRecipient?: boolean;
}


export class PatchBundlesIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PatchBundlesIdPathParams;

  @Metadata({ data: "request, media_type=multipart/form-data" })
  request?: PatchBundlesIdRequestBody;
}


export class PatchBundlesIdResponse extends SpeakeasyBase {
  @Metadata()
  bundleEntity?: shared.BundleEntity;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
