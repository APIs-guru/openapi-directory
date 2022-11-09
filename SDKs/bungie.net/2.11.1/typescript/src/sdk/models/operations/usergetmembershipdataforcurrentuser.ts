import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UserGetMembershipDataForCurrentUserSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class UserGetMembershipDataForCurrentUserRequest extends SpeakeasyBase {
  @Metadata()
  security: UserGetMembershipDataForCurrentUserSecurity;
}


export class UserGetMembershipDataForCurrentUserResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
