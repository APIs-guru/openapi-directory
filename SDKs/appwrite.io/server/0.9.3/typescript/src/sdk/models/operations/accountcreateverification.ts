import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AccountCreateVerificationRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=url" })
  url: string;
}


export class AccountCreateVerificationSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  jwt: shared.SchemeJwt;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  project: shared.SchemeProject;
}


export class AccountCreateVerificationRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: AccountCreateVerificationRequestBody;

  @Metadata()
  security: AccountCreateVerificationSecurity;
}


export class AccountCreateVerificationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  token?: shared.Token;
}
