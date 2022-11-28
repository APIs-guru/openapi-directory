import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EnterpriseAdminUpdateGlobalWebhookPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=hook_id" })
  hookId: number;
}


export class EnterpriseAdminUpdateGlobalWebhookHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=accept" })
  accept: string;
}


// EnterpriseAdminUpdateGlobalWebhookRequestBodyConfig
/** 
 * Key/value pairs to provide settings for this webhook.
**/
export class EnterpriseAdminUpdateGlobalWebhookRequestBodyConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content_type" })
  contentType?: string;

  @SpeakeasyMetadata({ data: "json, name=insecure_ssl" })
  insecureSsl?: string;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}


export class EnterpriseAdminUpdateGlobalWebhookRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=config" })
  config?: EnterpriseAdminUpdateGlobalWebhookRequestBodyConfig;

  @SpeakeasyMetadata({ data: "json, name=events" })
  events?: string[];
}


export class EnterpriseAdminUpdateGlobalWebhookRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EnterpriseAdminUpdateGlobalWebhookPathParams;

  @SpeakeasyMetadata()
  headers: EnterpriseAdminUpdateGlobalWebhookHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: EnterpriseAdminUpdateGlobalWebhookRequestBody;
}


export class EnterpriseAdminUpdateGlobalWebhookResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  globalHook2?: shared.GlobalHook2;
}
