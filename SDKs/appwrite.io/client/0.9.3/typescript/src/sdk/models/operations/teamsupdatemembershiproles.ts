import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TeamsUpdateMembershipRolesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=membershipId" })
  membershipId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=teamId" })
  teamId: string;
}


export class TeamsUpdateMembershipRolesRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=roles" })
  roles: string[];
}


export class TeamsUpdateMembershipRolesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  jwt: shared.SchemeJwt;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  project: shared.SchemeProject;
}


export class TeamsUpdateMembershipRolesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TeamsUpdateMembershipRolesPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: TeamsUpdateMembershipRolesRequestBody;

  @Metadata()
  security: TeamsUpdateMembershipRolesSecurity;
}


export class TeamsUpdateMembershipRolesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  membership?: shared.Membership;
}
