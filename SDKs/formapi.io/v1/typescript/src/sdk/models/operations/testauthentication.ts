import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TestAuthenticationSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  apiTokenBasic: shared.SchemeApiTokenBasic;
}

export enum TestAuthenticationAuthenticationSuccessResponseStatusEnum {
    Success = "success"
}


export class TestAuthenticationAuthenticationSuccessResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=status" })
  status: TestAuthenticationAuthenticationSuccessResponseStatusEnum;
}


export class TestAuthenticationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: TestAuthenticationSecurity;
}


export class TestAuthenticationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  authenticationError?: shared.AuthenticationError;

  @SpeakeasyMetadata()
  authenticationSuccessResponse?: TestAuthenticationAuthenticationSuccessResponse;
}
