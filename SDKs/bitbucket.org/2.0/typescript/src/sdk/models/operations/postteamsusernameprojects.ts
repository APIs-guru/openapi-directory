import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostTeamsUsernameProjectsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class PostTeamsUsernameProjectsSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class PostTeamsUsernameProjectsSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic: shared.SchemeBasic;
}


export class PostTeamsUsernameProjectsSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class PostTeamsUsernameProjectsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PostTeamsUsernameProjectsSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PostTeamsUsernameProjectsSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: PostTeamsUsernameProjectsSecurityOption3;
}


export class PostTeamsUsernameProjectsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostTeamsUsernameProjectsPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;

  @Metadata()
  security: PostTeamsUsernameProjectsSecurity;
}


export class PostTeamsUsernameProjectsResponse extends SpeakeasyBase {
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
