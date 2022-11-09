import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTeamsUsernameFollowingPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class GetTeamsUsernameFollowingSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetTeamsUsernameFollowingSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic: shared.SchemeBasic;
}


export class GetTeamsUsernameFollowingSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetTeamsUsernameFollowingSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetTeamsUsernameFollowingSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetTeamsUsernameFollowingSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: GetTeamsUsernameFollowingSecurityOption3;
}


export class GetTeamsUsernameFollowingRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTeamsUsernameFollowingPathParams;

  @Metadata()
  security: GetTeamsUsernameFollowingSecurity;
}


export class GetTeamsUsernameFollowingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;

  @Metadata()
  paginatedUsers?: shared.PaginatedUsers;
}
