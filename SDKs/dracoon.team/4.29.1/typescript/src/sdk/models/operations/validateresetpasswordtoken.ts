import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ValidateResetPasswordTokenPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=token" })
  token: string;
}


export class ValidateResetPasswordTokenRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ValidateResetPasswordTokenPathParams;
}


export class ValidateResetPasswordTokenResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  resetPasswordTokenValidateResponse?: shared.ResetPasswordTokenValidateResponse;

  @Metadata()
  statusCode: number;
}
