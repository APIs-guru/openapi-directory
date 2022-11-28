import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutMirroredVideoRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=videoId" })
  videoId: number;
}


export class PutMirroredVideoSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class PutMirroredVideoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PutMirroredVideoRequestBody;

  @SpeakeasyMetadata()
  security: PutMirroredVideoSecurity;
}


export class PutMirroredVideoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
