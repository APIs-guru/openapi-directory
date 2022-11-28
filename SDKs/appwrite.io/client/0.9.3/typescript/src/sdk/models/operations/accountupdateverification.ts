import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AccountUpdateVerificationRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret: string;

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId: string;
}


export class AccountUpdateVerificationSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  jwt: shared.SchemeJwt;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  project: shared.SchemeProject;
}


export class AccountUpdateVerificationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: AccountUpdateVerificationRequestBody;

  @SpeakeasyMetadata()
  security: AccountUpdateVerificationSecurity;
}


export class AccountUpdateVerificationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  token?: shared.Token;
}
