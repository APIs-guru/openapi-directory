import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReposUpdateWebhookConfigForRepoPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=hook_id" })
  hookId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposUpdateWebhookConfigForRepoRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content_type" })
  contentType?: string;

  @SpeakeasyMetadata({ data: "json, name=insecure_ssl" })
  insecureSsl?: string;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


export class ReposUpdateWebhookConfigForRepoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReposUpdateWebhookConfigForRepoPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: ReposUpdateWebhookConfigForRepoRequestBody;
}


export class ReposUpdateWebhookConfigForRepoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  webhookConfig?: shared.WebhookConfig;
}
