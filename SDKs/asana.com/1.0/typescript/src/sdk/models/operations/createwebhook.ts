import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateWebhookQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class CreateWebhookRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.WebhookRequest;
}


export class CreateWebhook201ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.WebhookResponse;
}


export class CreateWebhookRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: CreateWebhookQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateWebhookRequestBody;
}


export class CreateWebhookResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createWebhook201ApplicationJsonObject?: CreateWebhook201ApplicationJson;
}
