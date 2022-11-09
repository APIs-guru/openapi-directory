import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetUsersSelectedUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=selected_user" })
  selectedUser: string;
}


export class GetUsersSelectedUserSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetUsersSelectedUserSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic: shared.SchemeBasic;
}


export class GetUsersSelectedUserSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetUsersSelectedUserSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetUsersSelectedUserSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetUsersSelectedUserSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: GetUsersSelectedUserSecurityOption3;
}


export class GetUsersSelectedUserRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetUsersSelectedUserPathParams;

  @Metadata()
  security: GetUsersSelectedUserSecurity;
}


export class GetUsersSelectedUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;

  @Metadata()
  user?: Map<string, any>;
}
