import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateHtmlTemplateCreateHtmlTemplateDataHtmlTemplateDataExpirationIntervalEnum {
    Minutes = "minutes"
,    Hours = "hours"
,    Days = "days"
}

export enum CreateHtmlTemplateCreateHtmlTemplateDataHtmlTemplateDataTemplateTypeEnum {
    Pdf = "pdf"
,    Html = "html"
}


export class CreateHtmlTemplateCreateHtmlTemplateDataHtmlTemplateData extends SpeakeasyBase {
  @Metadata({ data: "json, name=allow_additional_properties" })
  allowAdditionalProperties?: boolean;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=editable_submissions" })
  editableSubmissions?: boolean;

  @Metadata({ data: "json, name=expiration_interval" })
  expirationInterval?: CreateHtmlTemplateCreateHtmlTemplateDataHtmlTemplateDataExpirationIntervalEnum;

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
  templateType?: CreateHtmlTemplateCreateHtmlTemplateDataHtmlTemplateDataTemplateTypeEnum;

  @Metadata({ data: "json, name=webhook_url" })
  webhookUrl?: string;
}


export class CreateHtmlTemplateCreateHtmlTemplateData extends SpeakeasyBase {
  @Metadata({ data: "json, name=template" })
  template: CreateHtmlTemplateCreateHtmlTemplateDataHtmlTemplateData;
}


export class CreateHtmlTemplateSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  apiTokenBasic: shared.SchemeApiTokenBasic;
}


export class CreateHtmlTemplateRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: CreateHtmlTemplateCreateHtmlTemplateData;

  @Metadata()
  security: CreateHtmlTemplateSecurity;
}

export enum CreateHtmlTemplatePendingTemplateExpirationIntervalEnum {
    Minutes = "minutes"
,    Hours = "hours"
,    Days = "days"
}


export class CreateHtmlTemplatePendingTemplate extends SpeakeasyBase {
  @Metadata({ data: "json, name=allow_additional_properties" })
  allowAdditionalProperties: boolean;

  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=editable_submissions" })
  editableSubmissions: boolean;

  @Metadata({ data: "json, name=expiration_interval" })
  expirationInterval?: CreateHtmlTemplatePendingTemplateExpirationIntervalEnum;

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


export class CreateHtmlTemplateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  authenticationError?: shared.AuthenticationError;

  @Metadata()
  pendingTemplate?: CreateHtmlTemplatePendingTemplate;
}
