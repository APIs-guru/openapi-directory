import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AddMembersForPortfolioPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=portfolio_gid" })
  portfolioGid: string;
}


export class AddMembersForPortfolioQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class AddMembersForPortfolioRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.AddMembersRequest;
}


export class AddMembersForPortfolioRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AddMembersForPortfolioPathParams;

  @Metadata()
  queryParams: AddMembersForPortfolioQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: AddMembersForPortfolioRequestBody;
}


export class AddMembersForPortfolio200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;
}


export class AddMembersForPortfolioResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  addMembersForPortfolio200ApplicationJsonObject?: AddMembersForPortfolio200ApplicationJson;
}
