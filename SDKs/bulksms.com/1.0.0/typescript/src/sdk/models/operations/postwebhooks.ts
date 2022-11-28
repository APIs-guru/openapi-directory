import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostWebhooksSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class PostWebhooksRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.WebhookEntry;

  @SpeakeasyMetadata()
  security: PostWebhooksSecurity;
}


export class PostWebhooksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  webhook?: shared.Webhook;
}
