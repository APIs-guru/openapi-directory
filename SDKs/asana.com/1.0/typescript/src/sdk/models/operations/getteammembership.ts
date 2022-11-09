import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTeamMembershipPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=team_membership_gid" })
  teamMembershipGid: string;
}


export class GetTeamMembershipQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class GetTeamMembershipRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTeamMembershipPathParams;

  @Metadata()
  queryParams: GetTeamMembershipQueryParams;
}


export class GetTeamMembership200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: shared.TeamMembershipResponse;
}


export class GetTeamMembershipResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  getTeamMembership200ApplicationJsonObject?: GetTeamMembership200ApplicationJson;
}
