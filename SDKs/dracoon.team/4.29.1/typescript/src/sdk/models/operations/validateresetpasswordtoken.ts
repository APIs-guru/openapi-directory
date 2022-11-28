import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ValidateResetPasswordTokenPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=token" })
  token: string;
}


export class ValidateResetPasswordTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ValidateResetPasswordTokenPathParams;
}


export class ValidateResetPasswordTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  resetPasswordTokenValidateResponse?: shared.ResetPasswordTokenValidateResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
