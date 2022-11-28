import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TeamsCreateMembershipPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=teamId" })
  teamId: string;
}


export class TeamsCreateMembershipRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=roles" })
  roles: string[];

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}


export class TeamsCreateMembershipSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  jwt: shared.SchemeJwt;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  key: shared.SchemeKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  project: shared.SchemeProject;
}


export class TeamsCreateMembershipRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TeamsCreateMembershipPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: TeamsCreateMembershipRequestBody;

  @SpeakeasyMetadata()
  security: TeamsCreateMembershipSecurity;
}


export class TeamsCreateMembershipResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  membership?: shared.Membership;
}
