import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AccountCreateAnonymousSessionSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  project: shared.SchemeProject;
}


export class AccountCreateAnonymousSessionRequest extends SpeakeasyBase {
  @Metadata()
  security: AccountCreateAnonymousSessionSecurity;
}


export class AccountCreateAnonymousSessionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  session?: shared.Session;
}
