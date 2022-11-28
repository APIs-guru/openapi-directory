import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UploadResumableQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_id" })
  uploadId: string;
}


export class UploadResumableHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Content-Length" })
  contentLength: number;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Content-Range" })
  contentRange: string;
}


export class UploadResumableSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class UploadResumableRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: UploadResumableQueryParams;

  @SpeakeasyMetadata()
  headers: UploadResumableHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/octet-stream" })
  request?: Uint8Array;

  @SpeakeasyMetadata()
  security: UploadResumableSecurity;
}


export class UploadResumableResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  videoUploadResponse?: any;
}
