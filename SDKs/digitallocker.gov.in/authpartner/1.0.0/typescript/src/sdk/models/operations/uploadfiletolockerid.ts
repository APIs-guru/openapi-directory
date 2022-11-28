import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UploadFileToLockerIdHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=hmac" })
  hmac?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=path" })
  path?: string;
}


export class UploadFileToLockerIdRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/octet-stream" })
  applicationOctetStream: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=image/jpeg" })
  imageJpeg: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=image/jpg" })
  imageJpg: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=image/pdf" })
  imagePdf: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=image/png" })
  imagePng: Uint8Array;
}


export class UploadFileToLockerIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class UploadFileToLockerId400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: any;

  @SpeakeasyMetadata({ data: "json, name=error_description" })
  errorDescription?: any;
}


export class UploadFileToLockerId401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string;

  @SpeakeasyMetadata({ data: "json, name=error_description" })
  errorDescription?: string;
}


export class UploadFileToLockerId500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string;

  @SpeakeasyMetadata({ data: "json, name=error_description" })
  errorDescription?: string;
}


export class UploadFileToLockerIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: UploadFileToLockerIdHeaders;

  @SpeakeasyMetadata()
  request?: UploadFileToLockerIdRequests;

  @SpeakeasyMetadata()
  security: UploadFileToLockerIdSecurity;
}


export class UploadFileToLockerIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  fileUploadResponse?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  uploadFileToLockerId400ApplicationJsonObject?: UploadFileToLockerId400ApplicationJson;

  @SpeakeasyMetadata()
  uploadFileToLockerId401ApplicationJsonObject?: UploadFileToLockerId401ApplicationJson;

  @SpeakeasyMetadata()
  uploadFileToLockerId500ApplicationJsonObject?: UploadFileToLockerId500ApplicationJson;
}
