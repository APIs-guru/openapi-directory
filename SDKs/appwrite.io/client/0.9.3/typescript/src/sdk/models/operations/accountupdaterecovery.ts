import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AccountUpdateRecoveryRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=password" })
  password: string;

  @Metadata({ data: "json, name=passwordAgain" })
  passwordAgain: string;

  @Metadata({ data: "json, name=secret" })
  secret: string;

  @Metadata({ data: "json, name=userId" })
  userId: string;
}


export class AccountUpdateRecoverySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  jwt: shared.SchemeJwt;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  project: shared.SchemeProject;
}


export class AccountUpdateRecoveryRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: AccountUpdateRecoveryRequestBody;

  @Metadata()
  security: AccountUpdateRecoverySecurity;
}


export class AccountUpdateRecoveryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  token?: shared.Token;
}
