import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class MoveTemplateToFolderPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=template_id" })
  templateId: string;
}


export class MoveTemplateToFolderMoveTemplateData extends SpeakeasyBase {
  @Metadata({ data: "json, name=parent_folder_id" })
  parentFolderId: string;
}


export class MoveTemplateToFolderSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  apiTokenBasic: shared.SchemeApiTokenBasic;
}


export class MoveTemplateToFolderRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: MoveTemplateToFolderPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: MoveTemplateToFolderMoveTemplateData;

  @Metadata()
  security: MoveTemplateToFolderSecurity;
}

export enum MoveTemplateToFolderTemplateExpirationIntervalEnum {
    Minutes = "minutes"
,    Hours = "hours"
,    Days = "days"
}


export class MoveTemplateToFolderTemplate extends SpeakeasyBase {
  @Metadata({ data: "json, name=allow_additional_properties" })
  allowAdditionalProperties: boolean;

  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=document_url" })
  documentUrl?: string;

  @Metadata({ data: "json, name=editable_submissions" })
  editableSubmissions: boolean;

  @Metadata({ data: "json, name=expiration_interval" })
  expirationInterval?: MoveTemplateToFolderTemplateExpirationIntervalEnum;

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


export class MoveTemplateToFolderResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  template?: MoveTemplateToFolderTemplate;
}
