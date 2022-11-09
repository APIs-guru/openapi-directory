import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostWebhooksIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostWebhooksIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostWebhooksIdPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.WebhookEntry;
}


export class PostWebhooksIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;

  @Metadata()
  webhook?: shared.Webhook;
}
