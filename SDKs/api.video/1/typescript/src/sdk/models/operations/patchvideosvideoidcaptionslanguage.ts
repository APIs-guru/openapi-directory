import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PatchVideosVideoIdCaptionsLanguagePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=language" })
  language: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=videoId" })
  videoId: string;
}


export class PatchVideosVideoIdCaptionsLanguageSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class PatchVideosVideoIdCaptionsLanguageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatchVideosVideoIdCaptionsLanguagePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.CaptionsUpdatePayload;

  @SpeakeasyMetadata()
  security: PatchVideosVideoIdCaptionsLanguageSecurity;
}


export class PatchVideosVideoIdCaptionsLanguageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  badRequest?: shared.BadRequest;

  @SpeakeasyMetadata()
  notFound?: shared.NotFound;

  @SpeakeasyMetadata()
  subtitle?: shared.Subtitle;
}
