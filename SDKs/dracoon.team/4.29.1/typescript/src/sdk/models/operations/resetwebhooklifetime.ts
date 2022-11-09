import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ResetWebhookLifetimePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=webhook_id" })
  webhookId: number;
}


export class ResetWebhookLifetimeHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" })
  xSdsDateFormat?: any;
}


export class ResetWebhookLifetimeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ResetWebhookLifetimePathParams;

  @Metadata()
  headers: ResetWebhookLifetimeHeaders;
}


export class ResetWebhookLifetimeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  webhook?: shared.Webhook;
}
