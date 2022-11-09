import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DelMirroredVideoPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=redundancyId" })
  redundancyId: string;
}


export class DelMirroredVideoSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class DelMirroredVideoRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DelMirroredVideoPathParams;

  @Metadata()
  security: DelMirroredVideoSecurity;
}


export class DelMirroredVideoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
