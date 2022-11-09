import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostWebhooksSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class PostWebhooksRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.WebhooksCreatePayload;

  @Metadata()
  security: PostWebhooksSecurity;
}


export class PostWebhooksResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  badRequest?: shared.BadRequest;

  @Metadata()
  webhook?: shared.Webhook;
}
