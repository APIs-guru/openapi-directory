import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListWebhooksQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=currentPage" })
  currentPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=events" })
  events?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;
}


export class ListWebhooksSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class ListWebhooksRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListWebhooksQueryParams;

  @Metadata()
  security: ListWebhooksSecurity;
}


export class ListWebhooksResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  webhooksListResponse?: shared.WebhooksListResponse;
}
