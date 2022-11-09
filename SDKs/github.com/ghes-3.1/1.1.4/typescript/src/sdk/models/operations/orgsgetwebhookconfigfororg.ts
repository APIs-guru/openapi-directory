import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class OrgsGetWebhookConfigForOrgPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=hook_id" })
  hookId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;
}


export class OrgsGetWebhookConfigForOrgRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: OrgsGetWebhookConfigForOrgPathParams;
}


export class OrgsGetWebhookConfigForOrgResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  webhookConfig?: shared.WebhookConfig;
}
