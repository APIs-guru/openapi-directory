import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetUsersSelectedUserSshKeysKeyIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=key_id" })
  keyId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=selected_user" })
  selectedUser: string;
}


export class GetUsersSelectedUserSshKeysKeyIdSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetUsersSelectedUserSshKeysKeyIdSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic: shared.SchemeBasic;
}


export class GetUsersSelectedUserSshKeysKeyIdSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetUsersSelectedUserSshKeysKeyIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetUsersSelectedUserSshKeysKeyIdSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetUsersSelectedUserSshKeysKeyIdSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: GetUsersSelectedUserSshKeysKeyIdSecurityOption3;
}


export class GetUsersSelectedUserSshKeysKeyIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetUsersSelectedUserSshKeysKeyIdPathParams;

  @Metadata()
  security: GetUsersSelectedUserSshKeysKeyIdSecurity;
}


export class GetUsersSelectedUserSshKeysKeyIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;

  @Metadata()
  sshAccountKey?: Map<string, any>;
}
