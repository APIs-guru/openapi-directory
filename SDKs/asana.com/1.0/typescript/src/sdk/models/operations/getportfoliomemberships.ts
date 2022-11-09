import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPortfolioMembershipsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;

  @Metadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=portfolio" })
  portfolio?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=user" })
  user?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=workspace" })
  workspace?: string;
}


export class GetPortfolioMembershipsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetPortfolioMembershipsQueryParams;
}


export class GetPortfolioMemberships200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.PortfolioMembershipCompact })
  data?: shared.PortfolioMembershipCompact[];
}


export class GetPortfolioMembershipsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  getPortfolioMemberships200ApplicationJsonObject?: GetPortfolioMemberships200ApplicationJson;
}
