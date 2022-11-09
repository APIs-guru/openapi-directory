import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AddUserSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class AddUserRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: any;

  @Metadata()
  security: AddUserSecurity;
}


export class AddUserResponse extends SpeakeasyBase {
  @Metadata()
  addUserResponse?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
