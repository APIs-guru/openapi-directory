import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class OrgsUpdateWebhookConfigForOrgPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=hook_id" })
  hookId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;
}


export class OrgsUpdateWebhookConfigForOrgRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=content_type" })
  contentType?: string;

  @Metadata({ data: "json, name=insecure_ssl" })
  insecureSsl?: string;

  @Metadata({ data: "json, name=secret" })
  secret?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


export class OrgsUpdateWebhookConfigForOrgRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: OrgsUpdateWebhookConfigForOrgPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: OrgsUpdateWebhookConfigForOrgRequestBody;
}


export class OrgsUpdateWebhookConfigForOrgResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  webhookConfig?: shared.WebhookConfig;
}
