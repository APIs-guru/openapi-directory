import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetUsersSelectedUserHooksPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=selected_user" })
  selectedUser: string;
}


export class GetUsersSelectedUserHooksSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetUsersSelectedUserHooksSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic: shared.SchemeBasic;
}


export class GetUsersSelectedUserHooksSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetUsersSelectedUserHooksSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetUsersSelectedUserHooksSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetUsersSelectedUserHooksSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: GetUsersSelectedUserHooksSecurityOption3;
}


export class GetUsersSelectedUserHooksRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetUsersSelectedUserHooksPathParams;

  @Metadata()
  security: GetUsersSelectedUserHooksSecurity;
}


export class GetUsersSelectedUserHooksResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;

  @Metadata()
  paginatedWebhookSubscriptions?: shared.PaginatedWebhookSubscriptions;
}
