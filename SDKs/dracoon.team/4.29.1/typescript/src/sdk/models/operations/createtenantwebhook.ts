import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateTenantWebhookHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" })
  xSdsDateFormat?: any;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Service-Token" })
  xSdsServiceToken?: string;
}


export class CreateTenantWebhookRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateTenantWebhookHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateWebhookRequest;
}


export class CreateTenantWebhookResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  webhook?: shared.Webhook;
}
