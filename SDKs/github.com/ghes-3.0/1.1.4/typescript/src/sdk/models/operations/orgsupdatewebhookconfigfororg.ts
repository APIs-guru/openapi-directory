import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class OrgsUpdateWebhookConfigForOrgPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=hook_id" })
  hookId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;
}


export class OrgsUpdateWebhookConfigForOrgRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content_type" })
  contentType?: string;

  @SpeakeasyMetadata({ data: "json, name=insecure_ssl" })
  insecureSsl?: any;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


export class OrgsUpdateWebhookConfigForOrgRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: OrgsUpdateWebhookConfigForOrgPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: OrgsUpdateWebhookConfigForOrgRequestBody;
}


export class OrgsUpdateWebhookConfigForOrgResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  webhookConfig?: shared.WebhookConfig;
}
