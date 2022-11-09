import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class OrgsUpdateWebhookPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=hook_id" })
  hookId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;
}


// OrgsUpdateWebhookRequestBodyConfig
/** 
 * Key/value pairs to provide settings for this webhook. [These are defined below](https://docs.github.com/enterprise-server@3.1/rest/reference/orgs#update-hook-config-params).
**/
export class OrgsUpdateWebhookRequestBodyConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=content_type" })
  contentType?: string;

  @Metadata({ data: "json, name=insecure_ssl" })
  insecureSsl?: any;

  @Metadata({ data: "json, name=secret" })
  secret?: string;

  @Metadata({ data: "json, name=url" })
  url: string;
}


export class OrgsUpdateWebhookRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=config" })
  config?: OrgsUpdateWebhookRequestBodyConfig;

  @Metadata({ data: "json, name=events" })
  events?: string[];

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class OrgsUpdateWebhookRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: OrgsUpdateWebhookPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: OrgsUpdateWebhookRequestBody;
}


export class OrgsUpdateWebhookResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  orgHook?: shared.OrgHook;

  @Metadata()
  validationError?: shared.ValidationError;
}
