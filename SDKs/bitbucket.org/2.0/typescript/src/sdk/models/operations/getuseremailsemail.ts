import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetUserEmailsEmailPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=email" })
  email: string;
}


export class GetUserEmailsEmailSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetUserEmailsEmailSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic: shared.SchemeBasic;
}


export class GetUserEmailsEmailSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetUserEmailsEmailSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetUserEmailsEmailSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetUserEmailsEmailSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: GetUserEmailsEmailSecurityOption3;
}


export class GetUserEmailsEmailRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetUserEmailsEmailPathParams;

  @Metadata()
  security: GetUserEmailsEmailSecurity;
}


export class GetUserEmailsEmailResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;
}
