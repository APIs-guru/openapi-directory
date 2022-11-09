import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateWebhookQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=workspace" })
  workspace?: string;
}


export class CreateWebhookRequestBodyWebhook extends SpeakeasyBase {
  @Metadata({ data: "json, name=collection" })
  collection?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class CreateWebhookRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=webhook" })
  webhook?: CreateWebhookRequestBodyWebhook;
}


export class CreateWebhookRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: CreateWebhookQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: CreateWebhookRequestBody;
}


export class CreateWebhookResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
