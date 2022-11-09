import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TestAuthenticationSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  apiTokenBasic: shared.SchemeApiTokenBasic;
}


export class TestAuthenticationRequest extends SpeakeasyBase {
  @Metadata()
  security: TestAuthenticationSecurity;
}

export enum TestAuthenticationAuthenticationSuccessResponseStatusEnum {
    Success = "success"
}


export class TestAuthenticationAuthenticationSuccessResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=status" })
  status: TestAuthenticationAuthenticationSuccessResponseStatusEnum;
}


export class TestAuthenticationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  authenticationError?: shared.AuthenticationError;

  @Metadata()
  authenticationSuccessResponse?: TestAuthenticationAuthenticationSuccessResponse;
}
