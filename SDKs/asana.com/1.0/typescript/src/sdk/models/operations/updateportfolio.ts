import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdatePortfolioPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=portfolio_gid" })
  portfolioGid: string;
}


export class UpdatePortfolioQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class UpdatePortfolioRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.PortfolioRequest;
}


export class UpdatePortfolioRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdatePortfolioPathParams;

  @Metadata()
  queryParams: UpdatePortfolioQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdatePortfolioRequestBody;
}


export class UpdatePortfolio200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.PortfolioResponse;
}


export class UpdatePortfolioResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  updatePortfolio200ApplicationJsonObject?: UpdatePortfolio200ApplicationJson;
}
