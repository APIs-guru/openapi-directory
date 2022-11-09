import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AppsUpdateWebhookConfigForAppRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=content_type" })
  contentType?: string;

  @Metadata({ data: "json, name=insecure_ssl" })
  insecureSsl?: string;

  @Metadata({ data: "json, name=secret" })
  secret?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


export class AppsUpdateWebhookConfigForAppRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: AppsUpdateWebhookConfigForAppRequestBody;
}


export class AppsUpdateWebhookConfigForAppResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  webhookConfig?: shared.WebhookConfig;
}
