import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AccountCreateJwtSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  project: shared.SchemeProject;
}


export class AccountCreateJwtRequest extends SpeakeasyBase {
  @Metadata()
  security: AccountCreateJwtSecurity;
}


export class AccountCreateJwtResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  jwt?: shared.Jwt;
}
