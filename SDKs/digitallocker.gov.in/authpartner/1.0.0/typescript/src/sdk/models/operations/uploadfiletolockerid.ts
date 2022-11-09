import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UploadFileToLockerIdHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=hmac" })
  hmac?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=path" })
  path?: string;
}


export class UploadFileToLockerIdRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/octet-stream" })
  applicationOctetStream: Uint8Array;

  @Metadata({ data: "request, media_type=image/jpeg" })
  imageJpeg: Uint8Array;

  @Metadata({ data: "request, media_type=image/jpg" })
  imageJpg: Uint8Array;

  @Metadata({ data: "request, media_type=image/pdf" })
  imagePdf: Uint8Array;

  @Metadata({ data: "request, media_type=image/png" })
  imagePng: Uint8Array;
}


export class UploadFileToLockerIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class UploadFileToLockerIdRequest extends SpeakeasyBase {
  @Metadata()
  headers: UploadFileToLockerIdHeaders;

  @Metadata()
  request?: UploadFileToLockerIdRequests;

  @Metadata()
  security: UploadFileToLockerIdSecurity;
}


export class UploadFileToLockerId400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: any;

  @Metadata({ data: "json, name=error_description" })
  errorDescription?: any;
}


export class UploadFileToLockerId401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: string;

  @Metadata({ data: "json, name=error_description" })
  errorDescription?: string;
}


export class UploadFileToLockerId500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: string;

  @Metadata({ data: "json, name=error_description" })
  errorDescription?: string;
}


export class UploadFileToLockerIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  fileUploadResponse?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  uploadFileToLockerId400ApplicationJsonObject?: UploadFileToLockerId400ApplicationJson;

  @Metadata()
  uploadFileToLockerId401ApplicationJsonObject?: UploadFileToLockerId401ApplicationJson;

  @Metadata()
  uploadFileToLockerId500ApplicationJsonObject?: UploadFileToLockerId500ApplicationJson;
}
