import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostSiteTestWebhookRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=action" })
  action?: string;

  @Metadata({ data: "multipart_form, name=body;json=true" })
  body?: Map<string, any>;

  @Metadata({ data: "multipart_form, name=encoding" })
  encoding?: string;

  @Metadata({ data: "multipart_form, name=headers;json=true" })
  headers?: Map<string, any>;

  @Metadata({ data: "multipart_form, name=method" })
  method?: string;

  @Metadata({ data: "multipart_form, name=url" })
  url: string;
}


export class PostSiteTestWebhookRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=multipart/form-data" })
  request: PostSiteTestWebhookRequestBody;
}


export class PostSiteTestWebhookResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  statusEntity?: shared.StatusEntity;
}
