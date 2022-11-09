import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTeamsUsernameFollowersPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class GetTeamsUsernameFollowersSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetTeamsUsernameFollowersSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic: shared.SchemeBasic;
}


export class GetTeamsUsernameFollowersSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetTeamsUsernameFollowersSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetTeamsUsernameFollowersSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetTeamsUsernameFollowersSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: GetTeamsUsernameFollowersSecurityOption3;
}


export class GetTeamsUsernameFollowersRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTeamsUsernameFollowersPathParams;

  @Metadata()
  security: GetTeamsUsernameFollowersSecurity;
}


export class GetTeamsUsernameFollowersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;

  @Metadata()
  paginatedUsers?: shared.PaginatedUsers;
}
