import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteUsersSelectedUserSshKeysKeyIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=key_id" })
  keyId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=selected_user" })
  selectedUser: string;
}


export class DeleteUsersSelectedUserSshKeysKeyIdSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class DeleteUsersSelectedUserSshKeysKeyIdSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic: shared.SchemeBasic;
}


export class DeleteUsersSelectedUserSshKeysKeyIdSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class DeleteUsersSelectedUserSshKeysKeyIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: DeleteUsersSelectedUserSshKeysKeyIdSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: DeleteUsersSelectedUserSshKeysKeyIdSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: DeleteUsersSelectedUserSshKeysKeyIdSecurityOption3;
}


export class DeleteUsersSelectedUserSshKeysKeyIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteUsersSelectedUserSshKeysKeyIdPathParams;

  @Metadata()
  security: DeleteUsersSelectedUserSshKeysKeyIdSecurity;
}


export class DeleteUsersSelectedUserSshKeysKeyIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;
}
