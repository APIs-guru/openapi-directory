import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateWebhookQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=workspace" })
  workspace?: string;
}


export class CreateWebhookRequestBodyWebhook extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=collection" })
  collection?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class CreateWebhookRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=webhook" })
  webhook?: CreateWebhookRequestBodyWebhook;
}


export class CreateWebhookRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: CreateWebhookQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: CreateWebhookRequestBody;
}


export class CreateWebhookResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
