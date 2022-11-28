import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AccountUpdatePasswordRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=oldPassword" })
  oldPassword?: string;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password: string;
}


export class AccountUpdatePasswordSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  jwt: shared.SchemeJwt;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  project: shared.SchemeProject;
}


export class AccountUpdatePasswordRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: AccountUpdatePasswordRequestBody;

  @SpeakeasyMetadata()
  security: AccountUpdatePasswordSecurity;
}


export class AccountUpdatePasswordResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  user?: shared.User;
}
