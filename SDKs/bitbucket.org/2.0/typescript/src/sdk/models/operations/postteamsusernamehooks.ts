import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostTeamsUsernameHooksPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class PostTeamsUsernameHooksSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class PostTeamsUsernameHooksSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic: shared.SchemeBasic;
}


export class PostTeamsUsernameHooksSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class PostTeamsUsernameHooksSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PostTeamsUsernameHooksSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PostTeamsUsernameHooksSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: PostTeamsUsernameHooksSecurityOption3;
}


export class PostTeamsUsernameHooksRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostTeamsUsernameHooksPathParams;

  @Metadata()
  security: PostTeamsUsernameHooksSecurity;
}


export class PostTeamsUsernameHooksResponse extends SpeakeasyBase {
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
