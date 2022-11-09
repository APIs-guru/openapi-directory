import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostActionWebhookFailuresIdRetryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PostActionWebhookFailuresIdRetryRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostActionWebhookFailuresIdRetryPathParams;
}


export class PostActionWebhookFailuresIdRetryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
