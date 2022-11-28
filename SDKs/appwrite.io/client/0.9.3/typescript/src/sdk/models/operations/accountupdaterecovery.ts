import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AccountUpdateRecoveryRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=password" })
  password: string;

  @SpeakeasyMetadata({ data: "json, name=passwordAgain" })
  passwordAgain: string;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret: string;

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId: string;
}


export class AccountUpdateRecoverySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  jwt: shared.SchemeJwt;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  project: shared.SchemeProject;
}


export class AccountUpdateRecoveryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: AccountUpdateRecoveryRequestBody;

  @SpeakeasyMetadata()
  security: AccountUpdateRecoverySecurity;
}


export class AccountUpdateRecoveryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  token?: shared.Token;
}
