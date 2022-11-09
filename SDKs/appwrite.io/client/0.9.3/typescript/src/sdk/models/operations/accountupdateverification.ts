import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AccountUpdateVerificationRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=secret" })
  secret: string;

  @Metadata({ data: "json, name=userId" })
  userId: string;
}


export class AccountUpdateVerificationSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  jwt: shared.SchemeJwt;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  project: shared.SchemeProject;
}


export class AccountUpdateVerificationRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: AccountUpdateVerificationRequestBody;

  @Metadata()
  security: AccountUpdateVerificationSecurity;
}


export class AccountUpdateVerificationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  token?: shared.Token;
}
