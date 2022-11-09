import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutMirroredVideoRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=videoId" })
  videoId: number;
}


export class PutMirroredVideoSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class PutMirroredVideoRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: PutMirroredVideoRequestBody;

  @Metadata()
  security: PutMirroredVideoSecurity;
}


export class PutMirroredVideoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
