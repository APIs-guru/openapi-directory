import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// WebhookConfig
/** 
 * Configuration object of the webhook
**/
export class WebhookConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=content_type" })
  contentType?: string;

  @Metadata({ data: "json, name=insecure_ssl" })
  insecureSsl?: any;

  @Metadata({ data: "json, name=secret" })
  secret?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
