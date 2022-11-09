import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTeamsUsernameProjectsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class GetTeamsUsernameProjectsSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetTeamsUsernameProjectsSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic: shared.SchemeBasic;
}


export class GetTeamsUsernameProjectsSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetTeamsUsernameProjectsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetTeamsUsernameProjectsSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetTeamsUsernameProjectsSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: GetTeamsUsernameProjectsSecurityOption3;
}


export class GetTeamsUsernameProjectsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTeamsUsernameProjectsPathParams;

  @Metadata()
  security: GetTeamsUsernameProjectsSecurity;
}


export class GetTeamsUsernameProjectsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;

  @Metadata()
  paginatedProjects?: shared.PaginatedProjects;
}
