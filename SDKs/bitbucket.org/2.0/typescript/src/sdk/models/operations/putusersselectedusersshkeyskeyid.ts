import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutUsersSelectedUserSshKeysKeyIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=key_id" })
  keyId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=selected_user" })
  selectedUser: string;
}


export class PutUsersSelectedUserSshKeysKeyIdSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class PutUsersSelectedUserSshKeysKeyIdSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic: shared.SchemeBasic;
}


export class PutUsersSelectedUserSshKeysKeyIdSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class PutUsersSelectedUserSshKeysKeyIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PutUsersSelectedUserSshKeysKeyIdSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PutUsersSelectedUserSshKeysKeyIdSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: PutUsersSelectedUserSshKeysKeyIdSecurityOption3;
}


export class PutUsersSelectedUserSshKeysKeyIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutUsersSelectedUserSshKeysKeyIdPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: Map<string, any>;

  @Metadata()
  security: PutUsersSelectedUserSshKeysKeyIdSecurity;
}


export class PutUsersSelectedUserSshKeysKeyIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;

  @Metadata()
  sshAccountKey?: Map<string, any>;
}
