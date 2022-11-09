import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RemoveItemForPortfolioPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=portfolio_gid" })
  portfolioGid: string;
}


export class RemoveItemForPortfolioQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class RemoveItemForPortfolioRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.PortfolioRemoveItemRequest;
}


export class RemoveItemForPortfolioRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RemoveItemForPortfolioPathParams;

  @Metadata()
  queryParams: RemoveItemForPortfolioQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: RemoveItemForPortfolioRequestBody;
}


export class RemoveItemForPortfolio200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;
}


export class RemoveItemForPortfolioResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  removeItemForPortfolio200ApplicationJsonObject?: RemoveItemForPortfolio200ApplicationJson;
}
