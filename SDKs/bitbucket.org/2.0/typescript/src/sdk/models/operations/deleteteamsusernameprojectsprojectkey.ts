import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteTeamsUsernameProjectsProjectKeyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=project_key" })
  projectKey: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class DeleteTeamsUsernameProjectsProjectKeySecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class DeleteTeamsUsernameProjectsProjectKeySecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic: shared.SchemeBasic;
}


export class DeleteTeamsUsernameProjectsProjectKeySecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class DeleteTeamsUsernameProjectsProjectKeySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: DeleteTeamsUsernameProjectsProjectKeySecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: DeleteTeamsUsernameProjectsProjectKeySecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: DeleteTeamsUsernameProjectsProjectKeySecurityOption3;
}


export class DeleteTeamsUsernameProjectsProjectKeyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteTeamsUsernameProjectsProjectKeyPathParams;

  @Metadata()
  security: DeleteTeamsUsernameProjectsProjectKeySecurity;
}


export class DeleteTeamsUsernameProjectsProjectKeyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;
}
