import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AccountGetSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  jwt: shared.SchemeJwt;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  project: shared.SchemeProject;
}


export class AccountGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: AccountGetSecurity;
}


export class AccountGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  user?: shared.User;
}
