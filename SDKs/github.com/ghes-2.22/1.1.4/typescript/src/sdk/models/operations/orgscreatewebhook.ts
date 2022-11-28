import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class OrgsCreateWebhookPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;
}


// OrgsCreateWebhookRequestBodyConfig
/** 
 * Key/value pairs to provide settings for this webhook. [These are defined below](https://docs.github.com/enterprise-server@2.22/rest/reference/orgs#create-hook-config-params).
**/
export class OrgsCreateWebhookRequestBodyConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content_type" })
  contentType?: string;

  @SpeakeasyMetadata({ data: "json, name=insecure_ssl" })
  insecureSsl?: any;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;
}


export class OrgsCreateWebhookRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=config" })
  config: OrgsCreateWebhookRequestBodyConfig;

  @SpeakeasyMetadata({ data: "json, name=events" })
  events?: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}


export class OrgsCreateWebhookRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: OrgsCreateWebhookPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: OrgsCreateWebhookRequestBody;
}


export class OrgsCreateWebhookResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  orgHook?: shared.OrgHook;

  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
