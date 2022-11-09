import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostUsersSelectedUserSshKeysPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=selected_user" })
  selectedUser: string;
}


export class PostUsersSelectedUserSshKeysSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class PostUsersSelectedUserSshKeysSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic: shared.SchemeBasic;
}


export class PostUsersSelectedUserSshKeysSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class PostUsersSelectedUserSshKeysSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PostUsersSelectedUserSshKeysSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PostUsersSelectedUserSshKeysSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: PostUsersSelectedUserSshKeysSecurityOption3;
}


export class PostUsersSelectedUserSshKeysRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostUsersSelectedUserSshKeysPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: Map<string, any>;

  @Metadata()
  security: PostUsersSelectedUserSshKeysSecurity;
}


export class PostUsersSelectedUserSshKeysResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;

  @Metadata()
  sshAccountKey?: Map<string, any>;
}
