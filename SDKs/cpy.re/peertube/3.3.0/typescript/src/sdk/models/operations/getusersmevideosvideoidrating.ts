import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetUsersMeVideosVideoIdRatingPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=videoId" })
  videoId: number;
}


export class GetUsersMeVideosVideoIdRatingSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetUsersMeVideosVideoIdRatingRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetUsersMeVideosVideoIdRatingPathParams;

  @Metadata()
  security: GetUsersMeVideosVideoIdRatingSecurity;
}


export class GetUsersMeVideosVideoIdRatingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getMeVideoRating?: any;

  @Metadata()
  statusCode: number;
}
