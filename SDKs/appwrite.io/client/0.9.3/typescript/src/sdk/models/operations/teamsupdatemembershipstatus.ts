import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TeamsUpdateMembershipStatusPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=membershipId" })
  membershipId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=teamId" })
  teamId: string;
}


export class TeamsUpdateMembershipStatusRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret: string;

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId: string;
}


export class TeamsUpdateMembershipStatusSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  jwt: shared.SchemeJwt;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  project: shared.SchemeProject;
}


export class TeamsUpdateMembershipStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TeamsUpdateMembershipStatusPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: TeamsUpdateMembershipStatusRequestBody;

  @SpeakeasyMetadata()
  security: TeamsUpdateMembershipStatusSecurity;
}


export class TeamsUpdateMembershipStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  membership?: shared.Membership;
}
