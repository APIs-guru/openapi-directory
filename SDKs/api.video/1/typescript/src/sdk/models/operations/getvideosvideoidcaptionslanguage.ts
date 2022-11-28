import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetVideosVideoIdCaptionsLanguagePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=language" })
  language: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=videoId" })
  videoId: string;
}


export class GetVideosVideoIdCaptionsLanguageSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class GetVideosVideoIdCaptionsLanguageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetVideosVideoIdCaptionsLanguagePathParams;

  @SpeakeasyMetadata()
  security: GetVideosVideoIdCaptionsLanguageSecurity;
}


export class GetVideosVideoIdCaptionsLanguageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  notFound?: shared.NotFound;

  @SpeakeasyMetadata()
  subtitle?: shared.Subtitle;
}
