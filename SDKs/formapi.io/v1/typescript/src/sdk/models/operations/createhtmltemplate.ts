import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum CreateHtmlTemplateCreateHtmlTemplateDataHtmlTemplateDataExpirationIntervalEnum {
    Minutes = "minutes",
    Hours = "hours",
    Days = "days"
}

export enum CreateHtmlTemplateCreateHtmlTemplateDataHtmlTemplateDataTemplateTypeEnum {
    Pdf = "pdf",
    Html = "html"
}


export class CreateHtmlTemplateCreateHtmlTemplateDataHtmlTemplateData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allow_additional_properties" })
  allowAdditionalProperties?: boolean;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=editable_submissions" })
  editableSubmissions?: boolean;

  @SpeakeasyMetadata({ data: "json, name=expiration_interval" })
  expirationInterval?: CreateHtmlTemplateCreateHtmlTemplateDataHtmlTemplateDataExpirationIntervalEnum;

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
  templateType?: CreateHtmlTemplateCreateHtmlTemplateDataHtmlTemplateDataTemplateTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=webhook_url" })
  webhookUrl?: string;
}


export class CreateHtmlTemplateCreateHtmlTemplateData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=template" })
  template: CreateHtmlTemplateCreateHtmlTemplateDataHtmlTemplateData;
}


export class CreateHtmlTemplateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  apiTokenBasic: shared.SchemeApiTokenBasic;
}

export enum CreateHtmlTemplatePendingTemplateExpirationIntervalEnum {
    Minutes = "minutes",
    Hours = "hours",
    Days = "days"
}


export class CreateHtmlTemplatePendingTemplate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allow_additional_properties" })
  allowAdditionalProperties: boolean;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=editable_submissions" })
  editableSubmissions: boolean;

  @SpeakeasyMetadata({ data: "json, name=expiration_interval" })
  expirationInterval?: CreateHtmlTemplatePendingTemplateExpirationIntervalEnum;

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


export class CreateHtmlTemplateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateHtmlTemplateCreateHtmlTemplateData;

  @SpeakeasyMetadata()
  security: CreateHtmlTemplateSecurity;
}


export class CreateHtmlTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  authenticationError?: shared.AuthenticationError;

  @SpeakeasyMetadata()
  pendingTemplate?: CreateHtmlTemplatePendingTemplate;
}
