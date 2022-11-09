import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTeamsUsernameHooksPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class GetTeamsUsernameHooksSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetTeamsUsernameHooksSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic: shared.SchemeBasic;
}


export class GetTeamsUsernameHooksSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetTeamsUsernameHooksSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetTeamsUsernameHooksSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetTeamsUsernameHooksSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: GetTeamsUsernameHooksSecurityOption3;
}


export class GetTeamsUsernameHooksRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTeamsUsernameHooksPathParams;

  @Metadata()
  security: GetTeamsUsernameHooksSecurity;
}


export class GetTeamsUsernameHooksResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;

  @Metadata()
  paginatedWebhookSubscriptions?: shared.PaginatedWebhookSubscriptions;
}
