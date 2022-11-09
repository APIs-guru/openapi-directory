import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPortfolioMembershipPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=portfolio_membership_gid" })
  portfolioMembershipGid: string;
}


export class GetPortfolioMembershipQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class GetPortfolioMembershipRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPortfolioMembershipPathParams;

  @Metadata()
  queryParams: GetPortfolioMembershipQueryParams;
}


export class GetPortfolioMembership200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.PortfolioMembershipResponse;
}


export class GetPortfolioMembershipResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  getPortfolioMembership200ApplicationJsonObject?: GetPortfolioMembership200ApplicationJson;
}
