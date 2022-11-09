import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetWebhookPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=webhook_gid" })
  webhookGid: string;
}


export class GetWebhookQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class GetWebhookRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetWebhookPathParams;

  @Metadata()
  queryParams: GetWebhookQueryParams;
}


export class GetWebhook200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.WebhookResponse;
}


export class GetWebhookResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  getWebhook200ApplicationJsonObject?: GetWebhook200ApplicationJson;
}
