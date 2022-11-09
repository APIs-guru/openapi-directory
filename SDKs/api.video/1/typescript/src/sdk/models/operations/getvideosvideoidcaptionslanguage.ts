import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetVideosVideoIdCaptionsLanguagePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=language" })
  language: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=videoId" })
  videoId: string;
}


export class GetVideosVideoIdCaptionsLanguageSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class GetVideosVideoIdCaptionsLanguageRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetVideosVideoIdCaptionsLanguagePathParams;

  @Metadata()
  security: GetVideosVideoIdCaptionsLanguageSecurity;
}


export class GetVideosVideoIdCaptionsLanguageResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  notFound?: shared.NotFound;

  @Metadata()
  subtitle?: shared.Subtitle;
}
