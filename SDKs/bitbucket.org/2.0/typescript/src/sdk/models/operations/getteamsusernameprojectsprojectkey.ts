import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTeamsUsernameProjectsProjectKeyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=project_key" })
  projectKey: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class GetTeamsUsernameProjectsProjectKeySecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetTeamsUsernameProjectsProjectKeySecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic: shared.SchemeBasic;
}


export class GetTeamsUsernameProjectsProjectKeySecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetTeamsUsernameProjectsProjectKeySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetTeamsUsernameProjectsProjectKeySecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetTeamsUsernameProjectsProjectKeySecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: GetTeamsUsernameProjectsProjectKeySecurityOption3;
}


export class GetTeamsUsernameProjectsProjectKeyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTeamsUsernameProjectsProjectKeyPathParams;

  @Metadata()
  security: GetTeamsUsernameProjectsProjectKeySecurity;
}


export class GetTeamsUsernameProjectsProjectKeyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;

  @Metadata()
  project?: Map<string, any>;
}
