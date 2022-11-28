import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutVideosIdRatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: any;
}

export enum PutVideosIdRateRequestBodyRatingEnum {
    Like = "like",
    Dislike = "dislike"
}


export class PutVideosIdRateRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rating" })
  rating: PutVideosIdRateRequestBodyRatingEnum;
}


export class PutVideosIdRateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class PutVideosIdRateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutVideosIdRatePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PutVideosIdRateRequestBody;

  @SpeakeasyMetadata()
  security: PutVideosIdRateSecurity;
}


export class PutVideosIdRateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
