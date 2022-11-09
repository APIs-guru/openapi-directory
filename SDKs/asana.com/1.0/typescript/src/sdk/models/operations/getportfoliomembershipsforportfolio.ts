import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPortfolioMembershipsForPortfolioPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=portfolio_gid" })
  portfolioGid: string;
}


export class GetPortfolioMembershipsForPortfolioQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;

  @Metadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=user" })
  user?: string;
}


export class GetPortfolioMembershipsForPortfolioRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPortfolioMembershipsForPortfolioPathParams;

  @Metadata()
  queryParams: GetPortfolioMembershipsForPortfolioQueryParams;
}


export class GetPortfolioMembershipsForPortfolio200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.PortfolioMembershipCompact })
  data?: shared.PortfolioMembershipCompact[];
}


export class GetPortfolioMembershipsForPortfolioResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  getPortfolioMembershipsForPortfolio200ApplicationJsonObject?: GetPortfolioMembershipsForPortfolio200ApplicationJson;
}
