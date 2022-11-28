import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UserGetMembershipDataForCurrentUserSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class UserGetMembershipDataForCurrentUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: UserGetMembershipDataForCurrentUserSecurity;
}


export class UserGetMembershipDataForCurrentUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
