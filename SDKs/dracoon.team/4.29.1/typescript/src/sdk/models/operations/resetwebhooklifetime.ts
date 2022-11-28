import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ResetWebhookLifetimePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=webhook_id" })
  webhookId: number;
}


export class ResetWebhookLifetimeHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" })
  xSdsDateFormat?: any;
}


export class ResetWebhookLifetimeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ResetWebhookLifetimePathParams;

  @SpeakeasyMetadata()
  headers: ResetWebhookLifetimeHeaders;
}


export class ResetWebhookLifetimeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  webhook?: shared.Webhook;
}
