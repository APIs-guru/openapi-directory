import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TeamsCreateMembershipPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=teamId" })
  teamId: string;
}


export class TeamsCreateMembershipRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=roles" })
  roles: string[];

  @Metadata({ data: "json, name=url" })
  url: string;
}


export class TeamsCreateMembershipSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  jwt: shared.SchemeJwt;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  project: shared.SchemeProject;
}


export class TeamsCreateMembershipRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TeamsCreateMembershipPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: TeamsCreateMembershipRequestBody;

  @Metadata()
  security: TeamsCreateMembershipSecurity;
}


export class TeamsCreateMembershipResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  membership?: shared.Membership;
}
