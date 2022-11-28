import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostAbusesRequestBodyAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;
}


export class PostAbusesRequestBodyComment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;
}


export class PostAbusesRequestBodyVideo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endAt" })
  endAt?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=startAt" })
  startAt?: number;
}


export class PostAbusesRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account" })
  account?: PostAbusesRequestBodyAccount;

  @SpeakeasyMetadata({ data: "json, name=comment" })
  comment?: PostAbusesRequestBodyComment;

  @SpeakeasyMetadata({ data: "json, name=predefinedReasons" })
  predefinedReasons?: shared.PredefinedAbuseReasonsEnum[];

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason: string;

  @SpeakeasyMetadata({ data: "json, name=video" })
  video?: PostAbusesRequestBodyVideo;
}


export class PostAbusesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class PostAbuses200ApplicationJsonAbuse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;
}


export class PostAbuses200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=abuse" })
  abuse?: PostAbuses200ApplicationJsonAbuse;
}


export class PostAbusesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PostAbusesRequestBody;

  @SpeakeasyMetadata()
  security: PostAbusesSecurity;
}


export class PostAbusesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postAbuses200ApplicationJsonObject?: PostAbuses200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
