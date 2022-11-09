import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AddItemForPortfolioPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=portfolio_gid" })
  portfolioGid: string;
}


export class AddItemForPortfolioQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class AddItemForPortfolioRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.PortfolioAddItemRequest;
}


export class AddItemForPortfolioRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AddItemForPortfolioPathParams;

  @Metadata()
  queryParams: AddItemForPortfolioQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: AddItemForPortfolioRequestBody;
}


export class AddItemForPortfolio200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;
}


export class AddItemForPortfolioResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  addItemForPortfolio200ApplicationJsonObject?: AddItemForPortfolio200ApplicationJson;
}
