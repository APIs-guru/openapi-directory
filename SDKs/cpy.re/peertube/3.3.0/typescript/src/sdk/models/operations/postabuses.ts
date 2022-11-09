import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostAbusesRequestBodyAccount extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;
}


export class PostAbusesRequestBodyComment extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;
}


export class PostAbusesRequestBodyVideo extends SpeakeasyBase {
  @Metadata({ data: "json, name=endAt" })
  endAt?: number;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=startAt" })
  startAt?: number;
}


export class PostAbusesRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=account" })
  account?: PostAbusesRequestBodyAccount;

  @Metadata({ data: "json, name=comment" })
  comment?: PostAbusesRequestBodyComment;

  @Metadata({ data: "json, name=predefinedReasons" })
  predefinedReasons?: shared.PredefinedAbuseReasonsEnum[];

  @Metadata({ data: "json, name=reason" })
  reason: string;

  @Metadata({ data: "json, name=video" })
  video?: PostAbusesRequestBodyVideo;
}


export class PostAbusesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class PostAbusesRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: PostAbusesRequestBody;

  @Metadata()
  security: PostAbusesSecurity;
}


export class PostAbuses200ApplicationJsonAbuse extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;
}


export class PostAbuses200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=abuse" })
  abuse?: PostAbuses200ApplicationJsonAbuse;
}


export class PostAbusesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postAbuses200ApplicationJsonObject?: PostAbuses200ApplicationJson;

  @Metadata()
  statusCode: number;
}
