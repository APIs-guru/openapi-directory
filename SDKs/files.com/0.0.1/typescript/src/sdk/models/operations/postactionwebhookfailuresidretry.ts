import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostActionWebhookFailuresIdRetryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PostActionWebhookFailuresIdRetryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostActionWebhookFailuresIdRetryPathParams;
}


export class PostActionWebhookFailuresIdRetryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
