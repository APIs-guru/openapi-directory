import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostWebhooksIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostWebhooksIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostWebhooksIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.WebhookEntry;
}


export class PostWebhooksIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  webhook?: shared.Webhook;
}
