import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UploadResumableInitHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Upload-Content-Length" })
  xUploadContentLength: number;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Upload-Content-Type" })
  xUploadContentType: string;
}


export class UploadResumableInitSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class UploadResumableInitRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: UploadResumableInitHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.VideoUploadRequestResumable;

  @SpeakeasyMetadata()
  security: UploadResumableInitSecurity;
}


export class UploadResumableInitResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
