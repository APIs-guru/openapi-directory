import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostWebhookTestsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=action" })
  action?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=body;json=true" })
  body?: Map<string, any>;

  @SpeakeasyMetadata({ data: "multipart_form, name=encoding" })
  encoding?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=file_as_body" })
  fileAsBody?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=file_form_field" })
  fileFormField?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=headers;json=true" })
  headers?: Map<string, any>;

  @SpeakeasyMetadata({ data: "multipart_form, name=method" })
  method?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=raw_body" })
  rawBody?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=url" })
  url: string;
}


export class PostWebhookTestsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: PostWebhookTestsRequestBody;
}


export class PostWebhookTestsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  webhookTestEntity?: shared.WebhookTestEntity;
}
