import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AccountCreateSessionRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email: string;

  @Metadata({ data: "json, name=password" })
  password: string;
}


export class AccountCreateSessionSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  project: shared.SchemeProject;
}


export class AccountCreateSessionRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: AccountCreateSessionRequestBody;

  @Metadata()
  security: AccountCreateSessionSecurity;
}


export class AccountCreateSessionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  session?: shared.Session;
}
