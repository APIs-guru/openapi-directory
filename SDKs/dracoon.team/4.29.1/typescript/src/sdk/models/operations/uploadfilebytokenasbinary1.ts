import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UploadFileByTokenAsBinary1PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=token" })
  token: string;
}


export class UploadFileByTokenAsBinary1Headers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Content-Range" })
  contentRange?: string;
}


export class UploadFileByTokenAsBinary1RequestBodyFile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=file" })
  file: string;
}


export class UploadFileByTokenAsBinary1RequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  file?: UploadFileByTokenAsBinary1RequestBodyFile;
}


export class UploadFileByTokenAsBinary1Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UploadFileByTokenAsBinary1PathParams;

  @SpeakeasyMetadata()
  headers: UploadFileByTokenAsBinary1Headers;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: UploadFileByTokenAsBinary1RequestBody;
}


export class UploadFileByTokenAsBinary1Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  chunkUploadResponse?: shared.ChunkUploadResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  uploadFileByTokenAsBinary1400ApplicationJsonOneOf?: any;

  @SpeakeasyMetadata()
  uploadFileByTokenAsBinary1401ApplicationJsonOneOf?: any;

  @SpeakeasyMetadata()
  uploadFileByTokenAsBinary1403ApplicationJsonOneOf?: any;

  @SpeakeasyMetadata()
  uploadFileByTokenAsBinary1404ApplicationJsonOneOf?: any;

  @SpeakeasyMetadata()
  uploadFileByTokenAsBinary1406ApplicationJsonOneOf?: any;

  @SpeakeasyMetadata()
  uploadFileByTokenAsBinary1507ApplicationJsonOneOf?: any;
}
