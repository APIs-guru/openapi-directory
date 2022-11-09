import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateTemplatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=template_id" })
  templateId: string;
}

export enum UpdateTemplateUpdateTemplateDataTemplateDataExpirationIntervalEnum {
    Minutes = "minutes"
,    Hours = "hours"
,    Days = "days"
}


export class UpdateTemplateUpdateTemplateDataTemplateData extends SpeakeasyBase {
  @Metadata({ data: "json, name=allow_additional_properties" })
  allowAdditionalProperties?: boolean;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=editable_submissions" })
  editableSubmissions?: boolean;

  @Metadata({ data: "json, name=expiration_interval" })
  expirationInterval?: UpdateTemplateUpdateTemplateDataTemplateDataExpirationIntervalEnum;

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
  name?: string;

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

  @Metadata({ data: "json, name=webhook_url" })
  webhookUrl?: string;
}


export class UpdateTemplateUpdateTemplateData extends SpeakeasyBase {
  @Metadata({ data: "json, name=template" })
  template: UpdateTemplateUpdateTemplateDataTemplateData;
}


export class UpdateTemplateSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  apiTokenBasic: shared.SchemeApiTokenBasic;
}


export class UpdateTemplateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateTemplatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateTemplateUpdateTemplateData;

  @Metadata()
  security: UpdateTemplateSecurity;
}

export enum UpdateTemplateUpdateTemplateResponseStatusEnum {
    Success = "success"
,    Error = "error"
}


export class UpdateTemplateUpdateTemplateResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors" })
  errors?: string[];

  @Metadata({ data: "json, name=status" })
  status: UpdateTemplateUpdateTemplateResponseStatusEnum;
}


export class UpdateTemplateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateTemplateResponse?: UpdateTemplateUpdateTemplateResponse;
}
