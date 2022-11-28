import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPortfolioMembershipPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=portfolio_membership_gid" })
  portfolioMembershipGid: string;
}


export class GetPortfolioMembershipQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class GetPortfolioMembership200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.PortfolioMembershipResponse;
}


export class GetPortfolioMembershipRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPortfolioMembershipPathParams;

  @SpeakeasyMetadata()
  queryParams: GetPortfolioMembershipQueryParams;
}


export class GetPortfolioMembershipResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getPortfolioMembership200ApplicationJsonObject?: GetPortfolioMembership200ApplicationJson;
}
