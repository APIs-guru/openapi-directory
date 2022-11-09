import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTeamsUsernameMembersPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class GetTeamsUsernameMembersSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetTeamsUsernameMembersSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic: shared.SchemeBasic;
}


export class GetTeamsUsernameMembersSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetTeamsUsernameMembersSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetTeamsUsernameMembersSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetTeamsUsernameMembersSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: GetTeamsUsernameMembersSecurityOption3;
}


export class GetTeamsUsernameMembersRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTeamsUsernameMembersPathParams;

  @Metadata()
  security: GetTeamsUsernameMembersSecurity;
}


export class GetTeamsUsernameMembersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;

  @Metadata()
  user?: Map<string, any>;
}
