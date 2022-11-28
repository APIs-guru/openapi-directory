import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ResetTenantWebhookLifetimePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=webhook_id" })
  webhookId: number;
}


export class ResetTenantWebhookLifetimeHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" })
  xSdsDateFormat?: any;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Service-Token" })
  xSdsServiceToken?: string;
}


export class ResetTenantWebhookLifetimeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ResetTenantWebhookLifetimePathParams;

  @SpeakeasyMetadata()
  headers: ResetTenantWebhookLifetimeHeaders;
}


export class ResetTenantWebhookLifetimeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  webhook?: shared.Webhook;
}
