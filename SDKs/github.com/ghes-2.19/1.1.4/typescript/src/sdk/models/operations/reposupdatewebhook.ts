import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReposUpdateWebhookPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=hook_id" })
  hookId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


// ReposUpdateWebhookRequestBodyConfig
/** 
 * Key/value pairs to provide settings for this webhook. [These are defined below](https://docs.github.com/enterprise-server@2.19/rest/reference/repos#create-hook-config-params).
**/
export class ReposUpdateWebhookRequestBodyConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: string;

  @Metadata({ data: "json, name=content_type" })
  contentType?: string;

  @Metadata({ data: "json, name=insecure_ssl" })
  insecureSsl?: any;

  @Metadata({ data: "json, name=room" })
  room?: string;

  @Metadata({ data: "json, name=secret" })
  secret?: string;

  @Metadata({ data: "json, name=url" })
  url: string;
}


export class ReposUpdateWebhookRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=add_events" })
  addEvents?: string[];

  @Metadata({ data: "json, name=config" })
  config?: ReposUpdateWebhookRequestBodyConfig;

  @Metadata({ data: "json, name=events" })
  events?: string[];

  @Metadata({ data: "json, name=remove_events" })
  removeEvents?: string[];
}


export class ReposUpdateWebhookRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReposUpdateWebhookPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: ReposUpdateWebhookRequestBody;
}


export class ReposUpdateWebhookResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  hook?: shared.Hook;

  @Metadata()
  validationError?: shared.ValidationError;
}
