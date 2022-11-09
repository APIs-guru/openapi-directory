import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteTeamsUsernameHooksUidPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=uid" })
  uid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class DeleteTeamsUsernameHooksUidSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class DeleteTeamsUsernameHooksUidSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic: shared.SchemeBasic;
}


export class DeleteTeamsUsernameHooksUidSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class DeleteTeamsUsernameHooksUidSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: DeleteTeamsUsernameHooksUidSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: DeleteTeamsUsernameHooksUidSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: DeleteTeamsUsernameHooksUidSecurityOption3;
}


export class DeleteTeamsUsernameHooksUidRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteTeamsUsernameHooksUidPathParams;

  @Metadata()
  security: DeleteTeamsUsernameHooksUidSecurity;
}


export class DeleteTeamsUsernameHooksUidResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;
}
