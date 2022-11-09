import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AccountUpdatePasswordRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=oldPassword" })
  oldPassword?: string;

  @Metadata({ data: "json, name=password" })
  password: string;
}


export class AccountUpdatePasswordSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  jwt: shared.SchemeJwt;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  project: shared.SchemeProject;
}


export class AccountUpdatePasswordRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: AccountUpdatePasswordRequestBody;

  @Metadata()
  security: AccountUpdatePasswordSecurity;
}


export class AccountUpdatePasswordResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  user?: shared.User;
}
