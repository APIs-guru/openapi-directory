import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutTeamsUsernameProjectsProjectKeyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=project_key" })
  projectKey: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class PutTeamsUsernameProjectsProjectKeySecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class PutTeamsUsernameProjectsProjectKeySecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic: shared.SchemeBasic;
}


export class PutTeamsUsernameProjectsProjectKeySecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class PutTeamsUsernameProjectsProjectKeySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PutTeamsUsernameProjectsProjectKeySecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PutTeamsUsernameProjectsProjectKeySecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: PutTeamsUsernameProjectsProjectKeySecurityOption3;
}


export class PutTeamsUsernameProjectsProjectKeyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutTeamsUsernameProjectsProjectKeyPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;

  @Metadata()
  security: PutTeamsUsernameProjectsProjectKeySecurity;
}


export class PutTeamsUsernameProjectsProjectKeyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;

  @Metadata()
  project?: Map<string, any>;
}
