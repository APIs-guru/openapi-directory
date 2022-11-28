import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DelMirroredVideoPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=redundancyId" })
  redundancyId: string;
}


export class DelMirroredVideoSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class DelMirroredVideoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DelMirroredVideoPathParams;

  @SpeakeasyMetadata()
  security: DelMirroredVideoSecurity;
}


export class DelMirroredVideoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
