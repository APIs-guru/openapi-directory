import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class OrgsGetWebhookConfigForOrgPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=hook_id" })
  hookId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;
}


export class OrgsGetWebhookConfigForOrgRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: OrgsGetWebhookConfigForOrgPathParams;
}


export class OrgsGetWebhookConfigForOrgResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  webhookConfig?: shared.WebhookConfig;
}
