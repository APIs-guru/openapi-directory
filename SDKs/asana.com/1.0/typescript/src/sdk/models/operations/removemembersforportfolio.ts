import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RemoveMembersForPortfolioPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=portfolio_gid" })
  portfolioGid: string;
}


export class RemoveMembersForPortfolioQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class RemoveMembersForPortfolioRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.RemoveMembersRequest;
}


export class RemoveMembersForPortfolio200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;
}


export class RemoveMembersForPortfolioRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RemoveMembersForPortfolioPathParams;

  @SpeakeasyMetadata()
  queryParams: RemoveMembersForPortfolioQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: RemoveMembersForPortfolioRequestBody;
}


export class RemoveMembersForPortfolioResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  removeMembersForPortfolio200ApplicationJsonObject?: RemoveMembersForPortfolio200ApplicationJson;
}
