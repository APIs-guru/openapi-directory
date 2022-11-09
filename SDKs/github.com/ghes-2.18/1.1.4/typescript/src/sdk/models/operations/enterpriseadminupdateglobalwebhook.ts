import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EnterpriseAdminUpdateGlobalWebhookPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=hook_id" })
  hookId: number;
}


export class EnterpriseAdminUpdateGlobalWebhookHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=accept" })
  accept: string;
}


// EnterpriseAdminUpdateGlobalWebhookRequestBodyConfig
/** 
 * Key/value pairs to provide settings for this webhook.
**/
export class EnterpriseAdminUpdateGlobalWebhookRequestBodyConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=content_type" })
  contentType?: string;

  @Metadata({ data: "json, name=insecure_ssl" })
  insecureSsl?: string;

  @Metadata({ data: "json, name=secret" })
  secret?: string;

  @Metadata({ data: "json, name=url" })
  url: string;
}


export class EnterpriseAdminUpdateGlobalWebhookRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=config" })
  config?: EnterpriseAdminUpdateGlobalWebhookRequestBodyConfig;

  @Metadata({ data: "json, name=events" })
  events?: string[];
}


export class EnterpriseAdminUpdateGlobalWebhookRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EnterpriseAdminUpdateGlobalWebhookPathParams;

  @Metadata()
  headers: EnterpriseAdminUpdateGlobalWebhookHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request?: EnterpriseAdminUpdateGlobalWebhookRequestBody;
}


export class EnterpriseAdminUpdateGlobalWebhookResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  globalHook2?: shared.GlobalHook2;
}
