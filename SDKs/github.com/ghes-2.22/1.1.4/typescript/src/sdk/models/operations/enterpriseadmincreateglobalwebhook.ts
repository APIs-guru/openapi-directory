import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EnterpriseAdminCreateGlobalWebhookHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=accept" })
  accept: string;
}


// EnterpriseAdminCreateGlobalWebhookRequestBodyConfig
/** 
 * Key/value pairs to provide settings for this webhook.
**/
export class EnterpriseAdminCreateGlobalWebhookRequestBodyConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=content_type" })
  contentType?: string;

  @Metadata({ data: "json, name=insecure_ssl" })
  insecureSsl?: string;

  @Metadata({ data: "json, name=secret" })
  secret?: string;

  @Metadata({ data: "json, name=url" })
  url: string;
}


export class EnterpriseAdminCreateGlobalWebhookRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=config" })
  config: EnterpriseAdminCreateGlobalWebhookRequestBodyConfig;

  @Metadata({ data: "json, name=events" })
  events?: string[];

  @Metadata({ data: "json, name=name" })
  name: string;
}


export class EnterpriseAdminCreateGlobalWebhookRequest extends SpeakeasyBase {
  @Metadata()
  headers: EnterpriseAdminCreateGlobalWebhookHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request?: EnterpriseAdminCreateGlobalWebhookRequestBody;
}


export class EnterpriseAdminCreateGlobalWebhookResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  globalHook?: shared.GlobalHook;
}
