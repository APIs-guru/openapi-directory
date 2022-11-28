import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ResetPasswordPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=token" })
  token: string;
}


export class ResetPasswordRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ResetPasswordPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ResetPasswordWithTokenRequest;
}


export class ResetPasswordResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  resetPassword400ApplicationJsonOneOf?: any;
}
