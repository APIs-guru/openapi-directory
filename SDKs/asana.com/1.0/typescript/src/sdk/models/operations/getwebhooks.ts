import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetWebhooksQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;

  @Metadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=resource" })
  resource?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=workspace" })
  workspace: string;
}


export class GetWebhooksRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetWebhooksQueryParams;
}


export class GetWebhooks200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.WebhookResponse })
  data?: shared.WebhookResponse[];
}


export class GetWebhooksResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  getWebhooks200ApplicationJsonObject?: GetWebhooks200ApplicationJson;
}
