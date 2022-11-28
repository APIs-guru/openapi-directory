import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReposUpdateWebhookPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=hook_id" })
  hookId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


// ReposUpdateWebhookRequestBodyConfig
/** 
 * Key/value pairs to provide settings for this webhook. [These are defined below](https://docs.github.com/enterprise-server@2.18/rest/reference/repos#create-hook-config-params).
**/
export class ReposUpdateWebhookRequestBodyConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: string;

  @SpeakeasyMetadata({ data: "json, name=content_type" })
  contentType?: string;

  @SpeakeasyMetadata({ data: "json, name=insecure_ssl" })
  insecureSsl?: any;

  @SpeakeasyMetadata({ data: "json, name=room" })
  room?: string;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}


export class ReposUpdateWebhookRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=add_events" })
  addEvents?: string[];

  @SpeakeasyMetadata({ data: "json, name=config" })
  config?: ReposUpdateWebhookRequestBodyConfig;

  @SpeakeasyMetadata({ data: "json, name=events" })
  events?: string[];

  @SpeakeasyMetadata({ data: "json, name=remove_events" })
  removeEvents?: string[];
}


export class ReposUpdateWebhookRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReposUpdateWebhookPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: ReposUpdateWebhookRequestBody;
}


export class ReposUpdateWebhookResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  hook?: shared.Hook;

  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
