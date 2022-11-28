import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AddMembersForPortfolioPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=portfolio_gid" })
  portfolioGid: string;
}


export class AddMembersForPortfolioQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class AddMembersForPortfolioRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.AddMembersRequest;
}


export class AddMembersForPortfolio200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;
}


export class AddMembersForPortfolioRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AddMembersForPortfolioPathParams;

  @SpeakeasyMetadata()
  queryParams: AddMembersForPortfolioQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: AddMembersForPortfolioRequestBody;
}


export class AddMembersForPortfolioResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  addMembersForPortfolio200ApplicationJsonObject?: AddMembersForPortfolio200ApplicationJson;
}
