import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetVideosVideoIdChaptersLanguagePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=language" })
  language: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=videoId" })
  videoId: string;
}


export class GetVideosVideoIdChaptersLanguageSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class GetVideosVideoIdChaptersLanguageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetVideosVideoIdChaptersLanguagePathParams;

  @SpeakeasyMetadata()
  security: GetVideosVideoIdChaptersLanguageSecurity;
}


export class GetVideosVideoIdChaptersLanguageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  chapter?: shared.Chapter;

  @SpeakeasyMetadata()
  notFound?: shared.NotFound;
}
