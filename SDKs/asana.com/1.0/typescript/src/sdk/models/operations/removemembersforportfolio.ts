import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RemoveMembersForPortfolioPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=portfolio_gid" })
  portfolioGid: string;
}


export class RemoveMembersForPortfolioQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class RemoveMembersForPortfolioRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.RemoveMembersRequest;
}


export class RemoveMembersForPortfolioRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RemoveMembersForPortfolioPathParams;

  @Metadata()
  queryParams: RemoveMembersForPortfolioQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: RemoveMembersForPortfolioRequestBody;
}


export class RemoveMembersForPortfolio200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;
}


export class RemoveMembersForPortfolioResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  removeMembersForPortfolio200ApplicationJsonObject?: RemoveMembersForPortfolio200ApplicationJson;
}
