import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostVideosVideoIdChaptersLanguagePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=language" })
  language: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=videoId" })
  videoId: string;
}


export class PostVideosVideoIdChaptersLanguageSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class PostVideosVideoIdChaptersLanguageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostVideosVideoIdChaptersLanguagePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: shared.ChaptersUpdatePayload;

  @SpeakeasyMetadata()
  security: PostVideosVideoIdChaptersLanguageSecurity;
}


export class PostVideosVideoIdChaptersLanguageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  badRequest?: shared.BadRequest;

  @SpeakeasyMetadata()
  chapter?: shared.Chapter;

  @SpeakeasyMetadata()
  notFound?: shared.NotFound;
}
