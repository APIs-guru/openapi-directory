import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListTemplatesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parent_folder_id" })
  parentFolderId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;
}


export class ListTemplatesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  apiTokenBasic: shared.SchemeApiTokenBasic;
}

export enum ListTemplatesTemplateExpirationIntervalEnum {
    Minutes = "minutes",
    Hours = "hours",
    Days = "days"
}


export class ListTemplatesTemplate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allow_additional_properties" })
  allowAdditionalProperties: boolean;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=document_url" })
  documentUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=editable_submissions" })
  editableSubmissions: boolean;

  @SpeakeasyMetadata({ data: "json, name=expiration_interval" })
  expirationInterval?: ListTemplatesTemplateExpirationIntervalEnum;

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

  @SpeakeasyMetadata({ data: "json, name=page_dimensions" })
  pageDimensions?: number[][];

  @SpeakeasyMetadata({ data: "json, name=parent_folder_id" })
  parentFolderId?: string;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=permanent_document_url" })
  permanentDocumentUrl?: string;

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


export class ListTemplatesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListTemplatesQueryParams;

  @SpeakeasyMetadata()
  security: ListTemplatesSecurity;
}


export class ListTemplatesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  authenticationError?: shared.AuthenticationError;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata({ elemType: ListTemplatesTemplate })
  templates?: ListTemplatesTemplate[];
}
