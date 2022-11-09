import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PatchVideosVideoIdCaptionsLanguagePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=language" })
  language: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=videoId" })
  videoId: string;
}


export class PatchVideosVideoIdCaptionsLanguageSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class PatchVideosVideoIdCaptionsLanguageRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PatchVideosVideoIdCaptionsLanguagePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.CaptionsUpdatePayload;

  @Metadata()
  security: PatchVideosVideoIdCaptionsLanguageSecurity;
}


export class PatchVideosVideoIdCaptionsLanguageResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  badRequest?: shared.BadRequest;

  @Metadata()
  notFound?: shared.NotFound;

  @Metadata()
  subtitle?: shared.Subtitle;
}
