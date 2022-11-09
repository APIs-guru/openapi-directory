import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CopyTemplatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=template_id" })
  templateId: string;
}


export class CopyTemplateCopyTemplateData extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=parent_folder_id" })
  parentFolderId: string;
}


export class CopyTemplateSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  apiTokenBasic: shared.SchemeApiTokenBasic;
}


export class CopyTemplateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CopyTemplatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: CopyTemplateCopyTemplateData;

  @Metadata()
  security: CopyTemplateSecurity;
}

export enum CopyTemplateTemplateExpirationIntervalEnum {
    Minutes = "minutes"
,    Hours = "hours"
,    Days = "days"
}


export class CopyTemplateTemplate extends SpeakeasyBase {
  @Metadata({ data: "json, name=allow_additional_properties" })
  allowAdditionalProperties: boolean;

  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=document_url" })
  documentUrl?: string;

  @Metadata({ data: "json, name=editable_submissions" })
  editableSubmissions: boolean;

  @Metadata({ data: "json, name=expiration_interval" })
  expirationInterval?: CopyTemplateTemplateExpirationIntervalEnum;

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

  @Metadata({ data: "json, name=page_dimensions" })
  pageDimensions?: number[][];

  @Metadata({ data: "json, name=parent_folder_id" })
  parentFolderId?: string;

  @Metadata({ data: "json, name=path" })
  path?: string;

  @Metadata({ data: "json, name=permanent_document_url" })
  permanentDocumentUrl?: string;

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


export class CopyTemplateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  template?: CopyTemplateTemplate;
}
