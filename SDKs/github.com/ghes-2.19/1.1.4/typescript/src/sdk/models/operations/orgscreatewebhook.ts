import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class OrgsCreateWebhookPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;
}


// OrgsCreateWebhookRequestBodyConfig
/** 
 * Key/value pairs to provide settings for this webhook. [These are defined below](https://docs.github.com/enterprise-server@2.19/rest/reference/orgs#create-hook-config-params).
**/
export class OrgsCreateWebhookRequestBodyConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=content_type" })
  contentType?: string;

  @Metadata({ data: "json, name=insecure_ssl" })
  insecureSsl?: any;

  @Metadata({ data: "json, name=password" })
  password?: string;

  @Metadata({ data: "json, name=secret" })
  secret?: string;

  @Metadata({ data: "json, name=url" })
  url: string;

  @Metadata({ data: "json, name=username" })
  username?: string;
}


export class OrgsCreateWebhookRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=config" })
  config: OrgsCreateWebhookRequestBodyConfig;

  @Metadata({ data: "json, name=events" })
  events?: string[];

  @Metadata({ data: "json, name=name" })
  name: string;
}


export class OrgsCreateWebhookRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: OrgsCreateWebhookPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: OrgsCreateWebhookRequestBody;
}


export class OrgsCreateWebhookResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  orgHook?: shared.OrgHook;

  @Metadata()
  validationError?: shared.ValidationError;
}
