import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreatePdfTemplateRequestBodyTemplateDocument extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @Metadata({ data: "multipart_form, name=template[document]" })
  templateDocument: string;
}


export class CreatePdfTemplateRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, file=true" })
  templateDocument: CreatePdfTemplateRequestBodyTemplateDocument;

  @Metadata({ data: "multipart_form, name=template[name]" })
  templateName: string;

  @Metadata({ data: "multipart_form, name=template[parent_folder_id]" })
  templateParentFolderId?: string;
}


export class CreatePdfTemplateSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  apiTokenBasic: shared.SchemeApiTokenBasic;
}


export class CreatePdfTemplateRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=multipart/form-data" })
  request: CreatePdfTemplateRequestBody;

  @Metadata()
  security: CreatePdfTemplateSecurity;
}

export enum CreatePdfTemplatePendingTemplateExpirationIntervalEnum {
    Minutes = "minutes"
,    Hours = "hours"
,    Days = "days"
}


export class CreatePdfTemplatePendingTemplate extends SpeakeasyBase {
  @Metadata({ data: "json, name=allow_additional_properties" })
  allowAdditionalProperties: boolean;

  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=editable_submissions" })
  editableSubmissions: boolean;

  @Metadata({ data: "json, name=expiration_interval" })
  expirationInterval?: CreatePdfTemplatePendingTemplateExpirationIntervalEnum;

  @Metadata({ data: "json, name=expire_after" })
  expireAfter?: number;

  @Metadata({ data: "json, name=expire_submissions" })
  expireSubmissions: boolean;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=locked" })
  locked: boolean;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=parent_folder_id" })
  parentFolderId?: string;

  @Metadata({ data: "json, name=path" })
  path?: string;

  @Metadata({ data: "json, name=public_submissions" })
  publicSubmissions: boolean;

  @Metadata({ data: "json, name=public_web_form" })
  publicWebForm: boolean;

  @Metadata({ data: "json, name=redirect_url" })
  redirectUrl: string;

  @Metadata({ data: "json, name=slack_webhook_url" })
  slackWebhookUrl: string;

  @Metadata({ data: "json, name=template_type" })
  templateType: string;

  @Metadata({ data: "json, name=webhook_url" })
  webhookUrl: string;
}


export class CreatePdfTemplateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  authenticationError?: shared.AuthenticationError;

  @Metadata()
  pendingTemplate?: CreatePdfTemplatePendingTemplate;
}
