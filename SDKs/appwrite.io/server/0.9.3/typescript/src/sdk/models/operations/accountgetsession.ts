import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AccountGetSessionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sessionId" })
  sessionId: string;
}


export class AccountGetSessionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  jwt: shared.SchemeJwt;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  project: shared.SchemeProject;
}


export class AccountGetSessionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AccountGetSessionPathParams;

  @SpeakeasyMetadata()
  security: AccountGetSessionSecurity;
}


export class AccountGetSessionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  session?: shared.Session;
}
