import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CancelFileUploadViaSharePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=access_key" })
  accessKey: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=upload_id" })
  uploadId: string;
}


export class CancelFileUploadViaShareRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CancelFileUploadViaSharePathParams;
}


export class CancelFileUploadViaShareResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
