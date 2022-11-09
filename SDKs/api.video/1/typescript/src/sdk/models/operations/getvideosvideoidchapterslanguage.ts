import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetVideosVideoIdChaptersLanguagePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=language" })
  language: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=videoId" })
  videoId: string;
}


export class GetVideosVideoIdChaptersLanguageSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class GetVideosVideoIdChaptersLanguageRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetVideosVideoIdChaptersLanguagePathParams;

  @Metadata()
  security: GetVideosVideoIdChaptersLanguageSecurity;
}


export class GetVideosVideoIdChaptersLanguageResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  chapter?: shared.Chapter;

  @Metadata()
  notFound?: shared.NotFound;
}
