import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CancelFileUploadByTokenPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=token" })
  token: string;
}


export class CancelFileUploadByTokenRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CancelFileUploadByTokenPathParams;
}


export class CancelFileUploadByTokenResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
