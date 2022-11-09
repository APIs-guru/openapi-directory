import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UploadFileAsMultipartPublic1PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=access_key" })
  accessKey: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=upload_id" })
  uploadId: string;
}


export class UploadFileAsMultipartPublic1Headers extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Content-Range" })
  contentRange?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" })
  xSdsDateFormat?: any;
}


export class UploadFileAsMultipartPublic1RequestBodyFile extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @Metadata({ data: "multipart_form, name=file" })
  file: string;
}


export class UploadFileAsMultipartPublic1RequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, file=true" })
  file?: UploadFileAsMultipartPublic1RequestBodyFile;
}


export class UploadFileAsMultipartPublic1Request extends SpeakeasyBase {
  @Metadata()
  pathParams: UploadFileAsMultipartPublic1PathParams;

  @Metadata()
  headers: UploadFileAsMultipartPublic1Headers;

  @Metadata({ data: "request, media_type=multipart/form-data" })
  request?: UploadFileAsMultipartPublic1RequestBody;
}


export class UploadFileAsMultipartPublic1Response extends SpeakeasyBase {
  @Metadata()
  chunkUploadResponse?: shared.ChunkUploadResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
