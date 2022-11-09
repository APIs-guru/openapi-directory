import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UploadFileAsMultipartPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=upload_id" })
  uploadId: string;
}


export class UploadFileAsMultipartHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Content-Range" })
  contentRange?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class UploadFileAsMultipartRequestBodyFile extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @Metadata({ data: "multipart_form, name=file" })
  file: string;
}


export class UploadFileAsMultipartRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, file=true" })
  file?: UploadFileAsMultipartRequestBodyFile;
}


export class UploadFileAsMultipartRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UploadFileAsMultipartPathParams;

  @Metadata()
  headers: UploadFileAsMultipartHeaders;

  @Metadata({ data: "request, media_type=multipart/form-data" })
  request: UploadFileAsMultipartRequestBody;
}


export class UploadFileAsMultipartResponse extends SpeakeasyBase {
  @Metadata()
  chunkUploadResponse?: shared.ChunkUploadResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
