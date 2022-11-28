import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class OrgsUpdateWebhookPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=hook_id" })
  hookId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;
}


// OrgsUpdateWebhookRequestBodyConfig
/** 
 * Key/value pairs to provide settings for this webhook. [These are defined below](https://docs.github.com/enterprise-server@2.19/rest/reference/orgs#update-hook-config-params).
**/
export class OrgsUpdateWebhookRequestBodyConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content_type" })
  contentType?: string;

  @SpeakeasyMetadata({ data: "json, name=insecure_ssl" })
  insecureSsl?: any;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}


export class OrgsUpdateWebhookRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=config" })
  config?: OrgsUpdateWebhookRequestBodyConfig;

  @SpeakeasyMetadata({ data: "json, name=events" })
  events?: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class OrgsUpdateWebhookRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: OrgsUpdateWebhookPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: OrgsUpdateWebhookRequestBody;
}


export class OrgsUpdateWebhookResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  orgHook?: shared.OrgHook;

  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
