import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostSiteTestWebhookRequestBody extends SpeakeasyBase {
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


export class PostSiteTestWebhookRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: PostSiteTestWebhookRequestBody;
}


export class PostSiteTestWebhookResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  statusEntity?: shared.StatusEntity;
}
