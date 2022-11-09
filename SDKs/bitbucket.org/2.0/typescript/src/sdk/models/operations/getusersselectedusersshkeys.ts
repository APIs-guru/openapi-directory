import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetUsersSelectedUserSshKeysPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=selected_user" })
  selectedUser: string;
}


export class GetUsersSelectedUserSshKeysSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetUsersSelectedUserSshKeysSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic: shared.SchemeBasic;
}


export class GetUsersSelectedUserSshKeysSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetUsersSelectedUserSshKeysSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetUsersSelectedUserSshKeysSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetUsersSelectedUserSshKeysSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: GetUsersSelectedUserSshKeysSecurityOption3;
}


export class GetUsersSelectedUserSshKeysRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetUsersSelectedUserSshKeysPathParams;

  @Metadata()
  security: GetUsersSelectedUserSshKeysSecurity;
}


export class GetUsersSelectedUserSshKeysResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;

  @Metadata()
  paginatedSshUserKeys?: shared.PaginatedSshUserKeys;
}
