import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateTenantWebhookPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=webhook_id" })
  webhookId: number;
}


export class UpdateTenantWebhookHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" })
  xSdsDateFormat?: any;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Service-Token" })
  xSdsServiceToken?: string;
}


export class UpdateTenantWebhookRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateTenantWebhookPathParams;

  @SpeakeasyMetadata()
  headers: UpdateTenantWebhookHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.UpdateWebhookRequest;
}


export class UpdateTenantWebhookResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  webhook?: shared.Webhook;
}
