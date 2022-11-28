import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RemoveItemForPortfolioPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=portfolio_gid" })
  portfolioGid: string;
}


export class RemoveItemForPortfolioQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class RemoveItemForPortfolioRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.PortfolioRemoveItemRequest;
}


export class RemoveItemForPortfolio200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;
}


export class RemoveItemForPortfolioRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RemoveItemForPortfolioPathParams;

  @SpeakeasyMetadata()
  queryParams: RemoveItemForPortfolioQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: RemoveItemForPortfolioRequestBody;
}


export class RemoveItemForPortfolioResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  removeItemForPortfolio200ApplicationJsonObject?: RemoveItemForPortfolio200ApplicationJson;
}
