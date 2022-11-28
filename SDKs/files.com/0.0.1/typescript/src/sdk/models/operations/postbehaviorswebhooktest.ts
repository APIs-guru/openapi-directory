import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostBehaviorsWebhookTestRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=action" })
  action?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=body;json=true" })
  body?: Map<string, any>;

  @SpeakeasyMetadata({ data: "multipart_form, name=encoding" })
  encoding?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=headers;json=true" })
  headers?: Map<string, any>;

  @SpeakeasyMetadata({ data: "multipart_form, name=method" })
  method?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=url" })
  url: string;
}


export class PostBehaviorsWebhookTestRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: PostBehaviorsWebhookTestRequestBody;
}


export class PostBehaviorsWebhookTestResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  statusEntity?: shared.StatusEntity;
}
