import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostUsersSelectedUserHooksPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=selected_user" })
  selectedUser: string;
}


export class PostUsersSelectedUserHooksSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class PostUsersSelectedUserHooksSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic: shared.SchemeBasic;
}


export class PostUsersSelectedUserHooksSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class PostUsersSelectedUserHooksSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PostUsersSelectedUserHooksSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PostUsersSelectedUserHooksSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: PostUsersSelectedUserHooksSecurityOption3;
}


export class PostUsersSelectedUserHooksRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostUsersSelectedUserHooksPathParams;

  @Metadata()
  security: PostUsersSelectedUserHooksSecurity;
}


export class PostUsersSelectedUserHooksResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;

  @Metadata()
  webhookSubscription?: Map<string, any>;
}
