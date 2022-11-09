import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UploadResumableQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_id" })
  uploadId: string;
}


export class UploadResumableHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Content-Length" })
  contentLength: number;

  @Metadata({ data: "header, style=simple;explode=false;name=Content-Range" })
  contentRange: string;
}


export class UploadResumableSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class UploadResumableRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: UploadResumableQueryParams;

  @Metadata()
  headers: UploadResumableHeaders;

  @Metadata({ data: "request, media_type=application/octet-stream" })
  request?: Uint8Array;

  @Metadata()
  security: UploadResumableSecurity;
}


export class UploadResumableResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  videoUploadResponse?: any;
}
