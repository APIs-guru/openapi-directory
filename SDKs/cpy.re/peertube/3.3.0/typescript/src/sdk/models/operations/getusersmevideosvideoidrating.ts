import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetUsersMeVideosVideoIdRatingPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=videoId" })
  videoId: number;
}


export class GetUsersMeVideosVideoIdRatingSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetUsersMeVideosVideoIdRatingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetUsersMeVideosVideoIdRatingPathParams;

  @SpeakeasyMetadata()
  security: GetUsersMeVideosVideoIdRatingSecurity;
}


export class GetUsersMeVideosVideoIdRatingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getMeVideoRating?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
