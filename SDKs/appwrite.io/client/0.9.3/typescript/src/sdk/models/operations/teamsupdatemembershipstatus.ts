import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TeamsUpdateMembershipStatusPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=membershipId" })
  membershipId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=teamId" })
  teamId: string;
}


export class TeamsUpdateMembershipStatusRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=secret" })
  secret: string;

  @Metadata({ data: "json, name=userId" })
  userId: string;
}


export class TeamsUpdateMembershipStatusSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  jwt: shared.SchemeJwt;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  project: shared.SchemeProject;
}


export class TeamsUpdateMembershipStatusRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TeamsUpdateMembershipStatusPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: TeamsUpdateMembershipStatusRequestBody;

  @Metadata()
  security: TeamsUpdateMembershipStatusSecurity;
}


export class TeamsUpdateMembershipStatusResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  membership?: shared.Membership;
}
