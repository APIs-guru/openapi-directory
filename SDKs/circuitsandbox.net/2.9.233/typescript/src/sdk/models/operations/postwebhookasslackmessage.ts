import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostWebhookAsSlackMessagePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=webhookId" })
  webhookId: string;
}


export class PostWebhookAsSlackMessageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostWebhookAsSlackMessagePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: any;
}


export class PostWebhookAsSlackMessageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
