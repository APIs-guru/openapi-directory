import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateDataDocumentMetadataMimeTypeEnum {
    ApplicationPdf = "application/pdf"
}


export class CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateDataDocumentMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filename" })
  filename: string;

  @SpeakeasyMetadata({ data: "json, name=mime_type" })
  mimeType: CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateDataDocumentMetadataMimeTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size: number;
}

export enum CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateDataDocumentStorageEnum {
    Cache = "cache"
}


export class CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateDataDocument extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata: CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateDataDocumentMetadata;

  @SpeakeasyMetadata({ data: "json, name=storage" })
  storage: CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateDataDocumentStorageEnum;
}

export enum CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateDataExpirationIntervalEnum {
    Minutes = "minutes",
    Hours = "hours",
    Days = "days"
}

export enum CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateDataTemplateTypeEnum {
    Pdf = "pdf",
    Html = "html"
}


export class CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allow_additional_properties" })
  allowAdditionalProperties?: boolean;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=document" })
  document?: CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateDataDocument;

  @SpeakeasyMetadata({ data: "json, name=editable_submissions" })
  editableSubmissions?: boolean;

  @SpeakeasyMetadata({ data: "json, name=expiration_interval" })
  expirationInterval?: CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateDataExpirationIntervalEnum;

  @SpeakeasyMetadata({ data: "json, name=expire_after" })
  expireAfter?: number;

  @SpeakeasyMetadata({ data: "json, name=expire_submissions" })
  expireSubmissions?: boolean;

  @SpeakeasyMetadata({ data: "json, name=footer_html" })
  footerHtml?: string;

  @SpeakeasyMetadata({ data: "json, name=header_html" })
  headerHtml?: string;

  @SpeakeasyMetadata({ data: "json, name=html" })
  html?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=public_submissions" })
  publicSubmissions?: boolean;

  @SpeakeasyMetadata({ data: "json, name=public_web_form" })
  publicWebForm?: boolean;

  @SpeakeasyMetadata({ data: "json, name=redirect_url" })
  redirectUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=scss" })
  scss?: string;

  @SpeakeasyMetadata({ data: "json, name=slack_webhook_url" })
  slackWebhookUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=template_type" })
  templateType?: CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateDataTemplateTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=webhook_url" })
  webhookUrl?: string;
}


export class CreatePdfTemplateFromUploadCreateTemplateFromUploadData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=template" })
  template: CreatePdfTemplateFromUploadCreateTemplateFromUploadDataUploadTemplateData;
}


export class CreatePdfTemplateFromUploadSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  apiTokenBasic: shared.SchemeApiTokenBasic;
}

export enum CreatePdfTemplateFromUploadPendingTemplateExpirationIntervalEnum {
    Minutes = "minutes",
    Hours = "hours",
    Days = "days"
}


export class CreatePdfTemplateFromUploadPendingTemplate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allow_additional_properties" })
  allowAdditionalProperties: boolean;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=editable_submissions" })
  editableSubmissions: boolean;

  @SpeakeasyMetadata({ data: "json, name=expiration_interval" })
  expirationInterval?: CreatePdfTemplateFromUploadPendingTemplateExpirationIntervalEnum;

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


export class CreatePdfTemplateFromUploadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreatePdfTemplateFromUploadCreateTemplateFromUploadData;

  @SpeakeasyMetadata()
  security: CreatePdfTemplateFromUploadSecurity;
}


export class CreatePdfTemplateFromUploadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  authenticationError?: shared.AuthenticationError;

  @SpeakeasyMetadata()
  pendingTemplate?: CreatePdfTemplateFromUploadPendingTemplate;
}
