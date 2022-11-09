import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateDataDocumentMetadataMimeTypeEnum {
    ApplicationPdf = "application/pdf"
}


export class CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateDataDocumentMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=filename" })
  filename: string;

  @Metadata({ data: "json, name=mime_type" })
  mimeType: CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateDataDocumentMetadataMimeTypeEnum;

  @Metadata({ data: "json, name=size" })
  size: number;
}

export enum CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateDataDocumentStorageEnum {
    Cache = "cache"
}


export class CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateDataDocument extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=metadata" })
  metadata: CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateDataDocumentMetadata;

  @Metadata({ data: "json, name=storage" })
  storage: CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateDataDocumentStorageEnum;
}

export enum CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateDataExpirationIntervalEnum {
    Minutes = "minutes"
,    Hours = "hours"
,    Days = "days"
}

export enum CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateDataTemplateTypeEnum {
    Pdf = "pdf"
,    Html = "html"
}


export class CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateData extends SpeakeasyBase {
  @Metadata({ data: "json, name=allow_additional_properties" })
  allowAdditionalProperties?: boolean;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=document" })
  document?: CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateDataDocument;

  @Metadata({ data: "json, name=editable_submissions" })
  editableSubmissions?: boolean;

  @Metadata({ data: "json, name=expiration_interval" })
  expirationInterval?: CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateDataExpirationIntervalEnum;

  @Metadata({ data: "json, name=expire_after" })
  expireAfter?: number;

  @Metadata({ data: "json, name=expire_submissions" })
  expireSubmissions?: boolean;

  @Metadata({ data: "json, name=footer_html" })
  footerHtml?: string;

  @Metadata({ data: "json, name=header_html" })
  headerHtml?: string;

  @Metadata({ data: "json, name=html" })
  html?: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=public_submissions" })
  publicSubmissions?: boolean;

  @Metadata({ data: "json, name=public_web_form" })
  publicWebForm?: boolean;

  @Metadata({ data: "json, name=redirect_url" })
  redirectUrl?: string;

  @Metadata({ data: "json, name=scss" })
  scss?: string;

  @Metadata({ data: "json, name=slack_webhook_url" })
  slackWebhookUrl?: string;

  @Metadata({ data: "json, name=template_type" })
  templateType?: CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateDataTemplateTypeEnum;

  @Metadata({ data: "json, name=webhook_url" })
  webhookUrl?: string;
}


export class CreatePdfTemplateFromUploadCreateTemplateFromUploadData extends SpeakeasyBase {
  @Metadata({ data: "json, name=template" })
  template: CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateData;
}


export class CreatePdfTemplateFromUploadSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  apiTokenBasic: shared.SchemeApiTokenBasic;
}


export class CreatePdfTemplateFromUploadRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: CreatePdfTemplateFromUploadCreateTemplateFromUploadData;

  @Metadata()
  security: CreatePdfTemplateFromUploadSecurity;
}

export enum CreatePdfTemplateFromUploadPendingTemplateExpirationIntervalEnum {
    Minutes = "minutes"
,    Hours = "hours"
,    Days = "days"
}


export class CreatePdfTemplateFromUploadPendingTemplate extends SpeakeasyBase {
  @Metadata({ data: "json, name=allow_additional_properties" })
  allowAdditionalProperties: boolean;

  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=editable_submissions" })
  editableSubmissions: boolean;

  @Metadata({ data: "json, name=expiration_interval" })
  expirationInterval?: CreatePdfTemplateFromUploadPendingTemplateExpirationIntervalEnum;

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


export class CreatePdfTemplateFromUploadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  authenticationError?: shared.AuthenticationError;

  @Metadata()
  pendingTemplate?: CreatePdfTemplateFromUploadPendingTemplate;
}
