import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostWebhookAsSlackMessagePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=webhookId" })
  webhookId: string;
}


export class PostWebhookAsSlackMessageRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostWebhookAsSlackMessagePathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: any;
}


export class PostWebhookAsSlackMessageResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
