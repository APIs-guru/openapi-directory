import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReposUpdateWebhookConfigForRepoPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=hook_id" })
  hookId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposUpdateWebhookConfigForRepoRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=content_type" })
  contentType?: string;

  @Metadata({ data: "json, name=insecure_ssl" })
  insecureSsl?: any;

  @Metadata({ data: "json, name=secret" })
  secret?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


export class ReposUpdateWebhookConfigForRepoRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReposUpdateWebhookConfigForRepoPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: ReposUpdateWebhookConfigForRepoRequestBody;
}


export class ReposUpdateWebhookConfigForRepoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  webhookConfig?: shared.WebhookConfig;
}
