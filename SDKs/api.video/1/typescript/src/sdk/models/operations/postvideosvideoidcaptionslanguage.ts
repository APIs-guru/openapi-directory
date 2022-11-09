import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostVideosVideoIdCaptionsLanguagePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=language" })
  language: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=videoId" })
  videoId: string;
}


export class PostVideosVideoIdCaptionsLanguageSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class PostVideosVideoIdCaptionsLanguageRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostVideosVideoIdCaptionsLanguagePathParams;

  @Metadata({ data: "request, media_type=multipart/form-data" })
  request?: shared.CaptionsUploadPayload;

  @Metadata()
  security: PostVideosVideoIdCaptionsLanguageSecurity;
}


export class PostVideosVideoIdCaptionsLanguageResponse extends SpeakeasyBase {
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
