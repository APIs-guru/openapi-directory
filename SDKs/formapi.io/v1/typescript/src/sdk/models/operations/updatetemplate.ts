import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateTemplatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=template_id" })
  templateId: string;
}

export enum UpdateTemplateUpdateTemplateDataTemplateDataExpirationIntervalEnum {
    Minutes = "minutes",
    Hours = "hours",
    Days = "days"
}


export class UpdateTemplateUpdateTemplateDataTemplateData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allow_additional_properties" })
  allowAdditionalProperties?: boolean;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=editable_submissions" })
  editableSubmissions?: boolean;

  @SpeakeasyMetadata({ data: "json, name=expiration_interval" })
  expirationInterval?: UpdateTemplateUpdateTemplateDataTemplateDataExpirationIntervalEnum;

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
  name?: string;

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

  @SpeakeasyMetadata({ data: "json, name=webhook_url" })
  webhookUrl?: string;
}


export class UpdateTemplateUpdateTemplateData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=template" })
  template: UpdateTemplateUpdateTemplateDataTemplateData;
}


export class UpdateTemplateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  apiTokenBasic: shared.SchemeApiTokenBasic;
}

export enum UpdateTemplateUpdateTemplateResponseStatusEnum {
    Success = "success",
    Error = "error"
}


export class UpdateTemplateUpdateTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors" })
  errors?: string[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: UpdateTemplateUpdateTemplateResponseStatusEnum;
}


export class UpdateTemplateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateTemplatePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateTemplateUpdateTemplateData;

  @SpeakeasyMetadata()
  security: UpdateTemplateSecurity;
}


export class UpdateTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateTemplateResponse?: UpdateTemplateUpdateTemplateResponse;
}
