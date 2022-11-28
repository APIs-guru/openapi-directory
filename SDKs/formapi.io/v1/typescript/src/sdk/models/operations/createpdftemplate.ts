import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreatePdfTemplateRequestBodyTemplateDocument extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=template[document]" })
  templateDocument: string;
}


export class CreatePdfTemplateRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  templateDocument: CreatePdfTemplateRequestBodyTemplateDocument;

  @SpeakeasyMetadata({ data: "multipart_form, name=template[name]" })
  templateName: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=template[parent_folder_id]" })
  templateParentFolderId?: string;
}


export class CreatePdfTemplateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  apiTokenBasic: shared.SchemeApiTokenBasic;
}

export enum CreatePdfTemplatePendingTemplateExpirationIntervalEnum {
    Minutes = "minutes",
    Hours = "hours",
    Days = "days"
}


export class CreatePdfTemplatePendingTemplate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allow_additional_properties" })
  allowAdditionalProperties: boolean;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=editable_submissions" })
  editableSubmissions: boolean;

  @SpeakeasyMetadata({ data: "json, name=expiration_interval" })
  expirationInterval?: CreatePdfTemplatePendingTemplateExpirationIntervalEnum;

  @SpeakeasyMetadata({ data: "json, name=expire_after" })
  expireAfter?: number;

  @SpeakeasyMetadata({ data: "json, name=expire_submissions" })
  expireSubmissions: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=locked" })
  locked: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=parent_folder_id" })
  parentFolderId?: string;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=public_submissions" })
  publicSubmissions: boolean;

  @SpeakeasyMetadata({ data: "json, name=public_web_form" })
  publicWebForm: boolean;

  @SpeakeasyMetadata({ data: "json, name=redirect_url" })
  redirectUrl: string;

  @SpeakeasyMetadata({ data: "json, name=slack_webhook_url" })
  slackWebhookUrl: string;

  @SpeakeasyMetadata({ data: "json, name=template_type" })
  templateType: string;

  @SpeakeasyMetadata({ data: "json, name=webhook_url" })
  webhookUrl: string;
}


export class CreatePdfTemplateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: CreatePdfTemplateRequestBody;

  @SpeakeasyMetadata()
  security: CreatePdfTemplateSecurity;
}


export class CreatePdfTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  authenticationError?: shared.AuthenticationError;

  @SpeakeasyMetadata()
  pendingTemplate?: CreatePdfTemplatePendingTemplate;
}
