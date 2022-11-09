import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteUsersSelectedUserHooksUidPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=selected_user" })
  selectedUser: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=uid" })
  uid: string;
}


export class DeleteUsersSelectedUserHooksUidSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class DeleteUsersSelectedUserHooksUidSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic: shared.SchemeBasic;
}


export class DeleteUsersSelectedUserHooksUidSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class DeleteUsersSelectedUserHooksUidSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: DeleteUsersSelectedUserHooksUidSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: DeleteUsersSelectedUserHooksUidSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: DeleteUsersSelectedUserHooksUidSecurityOption3;
}


export class DeleteUsersSelectedUserHooksUidRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteUsersSelectedUserHooksUidPathParams;

  @Metadata()
  security: DeleteUsersSelectedUserHooksUidSecurity;
}


export class DeleteUsersSelectedUserHooksUidResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;
}
