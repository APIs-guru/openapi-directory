import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPortfolioMembershipsForPortfolioPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=portfolio_gid" })
  portfolioGid: string;
}


export class GetPortfolioMembershipsForPortfolioQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user" })
  user?: string;
}


export class GetPortfolioMembershipsForPortfolio200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: shared.PortfolioMembershipCompact })
  data?: shared.PortfolioMembershipCompact[];
}


export class GetPortfolioMembershipsForPortfolioRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPortfolioMembershipsForPortfolioPathParams;

  @SpeakeasyMetadata()
  queryParams: GetPortfolioMembershipsForPortfolioQueryParams;
}


export class GetPortfolioMembershipsForPortfolioResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getPortfolioMembershipsForPortfolio200ApplicationJsonObject?: GetPortfolioMembershipsForPortfolio200ApplicationJson;
}
