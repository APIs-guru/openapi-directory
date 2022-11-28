import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetLiveIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: any;
}


export class GetLiveIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetLiveIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetLiveIdPathParams;

  @SpeakeasyMetadata()
  security: GetLiveIdSecurity;
}


export class GetLiveIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  liveVideoResponse?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
