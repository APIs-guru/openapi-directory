import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetUsersUsernameMembersPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class GetUsersUsernameMembersSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetUsersUsernameMembersSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic: shared.SchemeBasic;
}


export class GetUsersUsernameMembersSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetUsersUsernameMembersSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetUsersUsernameMembersSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetUsersUsernameMembersSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: GetUsersUsernameMembersSecurityOption3;
}


export class GetUsersUsernameMembersRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetUsersUsernameMembersPathParams;

  @Metadata()
  security: GetUsersUsernameMembersSecurity;
}


export class GetUsersUsernameMembersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;

  @Metadata()
  user?: Map<string, any>;
}
