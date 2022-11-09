import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateTenantWebhookPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=webhook_id" })
  webhookId: number;
}


export class UpdateTenantWebhookHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" })
  xSdsDateFormat?: any;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Service-Token" })
  xSdsServiceToken?: string;
}


export class UpdateTenantWebhookRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateTenantWebhookPathParams;

  @Metadata()
  headers: UpdateTenantWebhookHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateWebhookRequest;
}


export class UpdateTenantWebhookResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  webhook?: shared.Webhook;
}
