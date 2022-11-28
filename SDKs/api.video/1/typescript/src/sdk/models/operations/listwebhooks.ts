import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListWebhooksQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=currentPage" })
  currentPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=events" })
  events?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;
}


export class ListWebhooksSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class ListWebhooksRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListWebhooksQueryParams;

  @SpeakeasyMetadata()
  security: ListWebhooksSecurity;
}


export class ListWebhooksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  webhooksListResponse?: shared.WebhooksListResponse;
}
