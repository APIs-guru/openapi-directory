import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ResetPasswordPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=token" })
  token: string;
}


export class ResetPasswordRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ResetPasswordPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ResetPasswordWithTokenRequest;
}


export class ResetPasswordResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  resetPassword400ApplicationJsonOneOf?: any;
}
