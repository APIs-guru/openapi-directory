import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateWebhookQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class CreateWebhookRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.WebhookRequest;
}


export class CreateWebhookRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: CreateWebhookQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateWebhookRequestBody;
}


export class CreateWebhook201ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.WebhookResponse;
}


export class CreateWebhookResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  createWebhook201ApplicationJsonObject?: CreateWebhook201ApplicationJson;
}
