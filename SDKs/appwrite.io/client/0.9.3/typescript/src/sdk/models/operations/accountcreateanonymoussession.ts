import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AccountCreateAnonymousSessionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  project: shared.SchemeProject;
}


export class AccountCreateAnonymousSessionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: AccountCreateAnonymousSessionSecurity;
}


export class AccountCreateAnonymousSessionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  session?: shared.Session;
}
