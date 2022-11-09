import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetUsersSelectedUserHooksUidPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=selected_user" })
  selectedUser: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=uid" })
  uid: string;
}


export class GetUsersSelectedUserHooksUidSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetUsersSelectedUserHooksUidSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic: shared.SchemeBasic;
}


export class GetUsersSelectedUserHooksUidSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetUsersSelectedUserHooksUidSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetUsersSelectedUserHooksUidSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetUsersSelectedUserHooksUidSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: GetUsersSelectedUserHooksUidSecurityOption3;
}


export class GetUsersSelectedUserHooksUidRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetUsersSelectedUserHooksUidPathParams;

  @Metadata()
  security: GetUsersSelectedUserHooksUidSecurity;
}


export class GetUsersSelectedUserHooksUidResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;

  @Metadata()
  webhookSubscription?: Map<string, any>;
}
