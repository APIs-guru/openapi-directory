import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutUsersSelectedUserHooksUidPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=selected_user" })
  selectedUser: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=uid" })
  uid: string;
}


export class PutUsersSelectedUserHooksUidSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class PutUsersSelectedUserHooksUidSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic: shared.SchemeBasic;
}


export class PutUsersSelectedUserHooksUidSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class PutUsersSelectedUserHooksUidSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PutUsersSelectedUserHooksUidSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PutUsersSelectedUserHooksUidSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: PutUsersSelectedUserHooksUidSecurityOption3;
}


export class PutUsersSelectedUserHooksUidRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutUsersSelectedUserHooksUidPathParams;

  @Metadata()
  security: PutUsersSelectedUserHooksUidSecurity;
}


export class PutUsersSelectedUserHooksUidResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;

  @Metadata()
  webhookSubscription?: Map<string, any>;
}
