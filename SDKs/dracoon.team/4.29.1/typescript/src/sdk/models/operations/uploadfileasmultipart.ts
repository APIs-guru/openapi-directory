import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UploadFileAsMultipartPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=upload_id" })
  uploadId: string;
}


export class UploadFileAsMultipartHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Content-Range" })
  contentRange?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class UploadFileAsMultipartRequestBodyFile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=file" })
  file: string;
}


export class UploadFileAsMultipartRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  file?: UploadFileAsMultipartRequestBodyFile;
}


export class UploadFileAsMultipartRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UploadFileAsMultipartPathParams;

  @SpeakeasyMetadata()
  headers: UploadFileAsMultipartHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: UploadFileAsMultipartRequestBody;
}


export class UploadFileAsMultipartResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  chunkUploadResponse?: shared.ChunkUploadResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
