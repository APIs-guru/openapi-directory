import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// WebhookConfig
/** 
 * Configuration object of the webhook
**/
export class WebhookConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content_type" })
  contentType?: string;

  @SpeakeasyMetadata({ data: "json, name=insecure_ssl" })
  insecureSsl?: any;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
