import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutTeamsUsernameHooksUidPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=uid" })
  uid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class PutTeamsUsernameHooksUidSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class PutTeamsUsernameHooksUidSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic: shared.SchemeBasic;
}


export class PutTeamsUsernameHooksUidSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class PutTeamsUsernameHooksUidSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PutTeamsUsernameHooksUidSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PutTeamsUsernameHooksUidSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: PutTeamsUsernameHooksUidSecurityOption3;
}


export class PutTeamsUsernameHooksUidRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutTeamsUsernameHooksUidPathParams;

  @Metadata()
  security: PutTeamsUsernameHooksUidSecurity;
}


export class PutTeamsUsernameHooksUidResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;

  @Metadata()
  webhookSubscription?: Map<string, any>;
}
