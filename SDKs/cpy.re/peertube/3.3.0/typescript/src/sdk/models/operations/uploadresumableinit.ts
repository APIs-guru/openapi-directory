import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UploadResumableInitHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Upload-Content-Length" })
  xUploadContentLength: number;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Upload-Content-Type" })
  xUploadContentType: string;
}


export class UploadResumableInitSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class UploadResumableInitRequest extends SpeakeasyBase {
  @Metadata()
  headers: UploadResumableInitHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.VideoUploadRequestResumable;

  @Metadata()
  security: UploadResumableInitSecurity;
}


export class UploadResumableInitResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
