import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UploadFilePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=task_id" })
  taskId: string;
}


export class UploadFileSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class UploadFileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UploadFilePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: shared.FormDataContentDisposition;

  @SpeakeasyMetadata()
  security: UploadFileSecurity;
}


export class UploadFileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  uploadFile200ApplicationJsonObject?: Map<string, any>;
}
