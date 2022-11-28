import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EnterpriseAdminCreateGlobalWebhookHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=accept" })
  accept: string;
}


// EnterpriseAdminCreateGlobalWebhookRequestBodyConfig
/** 
 * Key/value pairs to provide settings for this webhook.
**/
export class EnterpriseAdminCreateGlobalWebhookRequestBodyConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content_type" })
  contentType?: string;

  @SpeakeasyMetadata({ data: "json, name=insecure_ssl" })
  insecureSsl?: string;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}


export class EnterpriseAdminCreateGlobalWebhookRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=config" })
  config: EnterpriseAdminCreateGlobalWebhookRequestBodyConfig;

  @SpeakeasyMetadata({ data: "json, name=events" })
  events?: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}


export class EnterpriseAdminCreateGlobalWebhookRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: EnterpriseAdminCreateGlobalWebhookHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: EnterpriseAdminCreateGlobalWebhookRequestBody;
}


export class EnterpriseAdminCreateGlobalWebhookResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  globalHook?: shared.GlobalHook;
}
