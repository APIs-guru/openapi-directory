import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UploadFilePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=task_id" })
  taskId: string;
}


export class UploadFileSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class UploadFileRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UploadFilePathParams;

  @Metadata({ data: "request, media_type=multipart/form-data" })
  request?: shared.FormDataContentDisposition;

  @Metadata()
  security: UploadFileSecurity;
}


export class UploadFileResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  uploadFile200ApplicationJsonObject?: Map<string, any>;
}
