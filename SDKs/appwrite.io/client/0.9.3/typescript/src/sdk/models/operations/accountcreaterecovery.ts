import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AccountCreateRecoveryRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}


export class AccountCreateRecoverySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  jwt: shared.SchemeJwt;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  project: shared.SchemeProject;
}


export class AccountCreateRecoveryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: AccountCreateRecoveryRequestBody;

  @SpeakeasyMetadata()
  security: AccountCreateRecoverySecurity;
}


export class AccountCreateRecoveryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  token?: shared.Token;
}
