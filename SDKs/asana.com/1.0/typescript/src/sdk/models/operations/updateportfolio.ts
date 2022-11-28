import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdatePortfolioPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=portfolio_gid" })
  portfolioGid: string;
}


export class UpdatePortfolioQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class UpdatePortfolioRequestBodyInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.PortfolioRequestInput;
}


export class UpdatePortfolio200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.PortfolioResponse;
}


export class UpdatePortfolioRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdatePortfolioPathParams;

  @SpeakeasyMetadata()
  queryParams: UpdatePortfolioQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdatePortfolioRequestBodyInput;
}


export class UpdatePortfolioResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updatePortfolio200ApplicationJsonObject?: UpdatePortfolio200ApplicationJson;
}
