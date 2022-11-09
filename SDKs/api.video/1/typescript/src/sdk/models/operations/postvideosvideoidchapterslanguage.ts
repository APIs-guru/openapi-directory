import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostVideosVideoIdChaptersLanguagePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=language" })
  language: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=videoId" })
  videoId: string;
}


export class PostVideosVideoIdChaptersLanguageSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class PostVideosVideoIdChaptersLanguageRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostVideosVideoIdChaptersLanguagePathParams;

  @Metadata({ data: "request, media_type=multipart/form-data" })
  request?: shared.ChaptersUpdatePayload;

  @Metadata()
  security: PostVideosVideoIdChaptersLanguageSecurity;
}


export class PostVideosVideoIdChaptersLanguageResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  badRequest?: shared.BadRequest;

  @Metadata()
  chapter?: shared.Chapter;

  @Metadata()
  notFound?: shared.NotFound;
}
