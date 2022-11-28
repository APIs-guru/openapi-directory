import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UploadFileAsMultipartPublic1PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=access_key" })
  accessKey: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=upload_id" })
  uploadId: string;
}


export class UploadFileAsMultipartPublic1Headers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Content-Range" })
  contentRange?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" })
  xSdsDateFormat?: any;
}


export class UploadFileAsMultipartPublic1RequestBodyFile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=file" })
  file: string;
}


export class UploadFileAsMultipartPublic1RequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  file?: UploadFileAsMultipartPublic1RequestBodyFile;
}


export class UploadFileAsMultipartPublic1Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UploadFileAsMultipartPublic1PathParams;

  @SpeakeasyMetadata()
  headers: UploadFileAsMultipartPublic1Headers;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: UploadFileAsMultipartPublic1RequestBody;
}


export class UploadFileAsMultipartPublic1Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  chunkUploadResponse?: shared.ChunkUploadResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
