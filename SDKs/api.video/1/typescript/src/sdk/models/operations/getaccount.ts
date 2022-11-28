import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAccountSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class GetAccountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: GetAccountSecurity;
}


export class GetAccountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  account?: shared.Account;

  @SpeakeasyMetadata()
  notFound?: shared.NotFound;
}
