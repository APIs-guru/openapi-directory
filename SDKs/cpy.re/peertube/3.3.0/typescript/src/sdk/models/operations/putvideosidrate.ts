import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutVideosIdRatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: any;
}

export enum PutVideosIdRateRequestBodyRatingEnum {
    Like = "like"
,    Dislike = "dislike"
}


export class PutVideosIdRateRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=rating" })
  rating: PutVideosIdRateRequestBodyRatingEnum;
}


export class PutVideosIdRateSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class PutVideosIdRateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutVideosIdRatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PutVideosIdRateRequestBody;

  @Metadata()
  security: PutVideosIdRateSecurity;
}


export class PutVideosIdRateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
