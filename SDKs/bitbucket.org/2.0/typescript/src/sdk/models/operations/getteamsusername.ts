import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTeamsUsernamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class GetTeamsUsernameSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetTeamsUsernameSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic: shared.SchemeBasic;
}


export class GetTeamsUsernameSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetTeamsUsernameSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetTeamsUsernameSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetTeamsUsernameSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: GetTeamsUsernameSecurityOption3;
}


export class GetTeamsUsernameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTeamsUsernamePathParams;

  @Metadata()
  security: GetTeamsUsernameSecurity;
}


export class GetTeamsUsernameResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;

  @Metadata()
  team?: Map<string, any>;
}
