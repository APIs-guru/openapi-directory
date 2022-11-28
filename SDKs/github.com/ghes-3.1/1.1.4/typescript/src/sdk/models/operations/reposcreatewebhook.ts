import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReposCreateWebhookPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


// ReposCreateWebhookRequestBodyConfig
/** 
 * Key/value pairs to provide settings for this webhook. [These are defined below](https://docs.github.com/enterprise-server@3.1/rest/reference/repos#create-hook-config-params).
**/
export class ReposCreateWebhookRequestBodyConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content_type" })
  contentType?: string;

  @SpeakeasyMetadata({ data: "json, name=digest" })
  digest?: string;

  @SpeakeasyMetadata({ data: "json, name=insecure_ssl" })
  insecureSsl?: any;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;

  @SpeakeasyMetadata({ data: "json, name=token" })
  token?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


export class ReposCreateWebhookRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=config" })
  config?: ReposCreateWebhookRequestBodyConfig;

  @SpeakeasyMetadata({ data: "json, name=events" })
  events?: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class ReposCreateWebhookRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReposCreateWebhookPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: ReposCreateWebhookRequestBody;
}


export class ReposCreateWebhookResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  hook?: shared.Hook;

  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
