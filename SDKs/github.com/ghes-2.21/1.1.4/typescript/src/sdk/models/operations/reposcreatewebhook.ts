import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReposCreateWebhookPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


// ReposCreateWebhookRequestBodyConfig
/** 
 * Key/value pairs to provide settings for this webhook. [These are defined below](https://docs.github.com/enterprise-server@2.21/rest/reference/repos#create-hook-config-params).
**/
export class ReposCreateWebhookRequestBodyConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=content_type" })
  contentType?: string;

  @Metadata({ data: "json, name=digest" })
  digest?: string;

  @Metadata({ data: "json, name=insecure_ssl" })
  insecureSsl?: any;

  @Metadata({ data: "json, name=secret" })
  secret?: string;

  @Metadata({ data: "json, name=token" })
  token?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


export class ReposCreateWebhookRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=config" })
  config?: ReposCreateWebhookRequestBodyConfig;

  @Metadata({ data: "json, name=events" })
  events?: string[];

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class ReposCreateWebhookRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReposCreateWebhookPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: ReposCreateWebhookRequestBody;
}


export class ReposCreateWebhookResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  hook?: shared.Hook;

  @Metadata()
  validationError?: shared.ValidationError;
}
