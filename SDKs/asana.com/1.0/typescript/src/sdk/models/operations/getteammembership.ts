import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTeamMembershipPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_membership_gid" })
  teamMembershipGid: string;
}


export class GetTeamMembershipQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" })
  optFields?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" })
  optPretty?: boolean;
}


export class GetTeamMembership200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.TeamMembershipResponse;
}


export class GetTeamMembershipRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTeamMembershipPathParams;

  @SpeakeasyMetadata()
  queryParams: GetTeamMembershipQueryParams;
}


export class GetTeamMembershipResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getTeamMembership200ApplicationJsonObject?: GetTeamMembership200ApplicationJson;
}
