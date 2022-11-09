import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UploadFileByTokenAsBinary1PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=token" })
  token: string;
}


export class UploadFileByTokenAsBinary1Headers extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Content-Range" })
  contentRange?: string;
}


export class UploadFileByTokenAsBinary1RequestBodyFile extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @Metadata({ data: "multipart_form, name=file" })
  file: string;
}


export class UploadFileByTokenAsBinary1RequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, file=true" })
  file?: UploadFileByTokenAsBinary1RequestBodyFile;
}


export class UploadFileByTokenAsBinary1Request extends SpeakeasyBase {
  @Metadata()
  pathParams: UploadFileByTokenAsBinary1PathParams;

  @Metadata()
  headers: UploadFileByTokenAsBinary1Headers;

  @Metadata({ data: "request, media_type=multipart/form-data" })
  request: UploadFileByTokenAsBinary1RequestBody;
}


export class UploadFileByTokenAsBinary1Response extends SpeakeasyBase {
  @Metadata()
  chunkUploadResponse?: shared.ChunkUploadResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  uploadFileByTokenAsBinary1400ApplicationJsonOneOf?: any;

  @Metadata()
  uploadFileByTokenAsBinary1401ApplicationJsonOneOf?: any;

  @Metadata()
  uploadFileByTokenAsBinary1403ApplicationJsonOneOf?: any;

  @Metadata()
  uploadFileByTokenAsBinary1404ApplicationJsonOneOf?: any;

  @Metadata()
  uploadFileByTokenAsBinary1406ApplicationJsonOneOf?: any;

  @Metadata()
  uploadFileByTokenAsBinary1507ApplicationJsonOneOf?: any;
}
