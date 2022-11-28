import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostVideosVideoIdCaptionsLanguagePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=language" })
  language: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=videoId" })
  videoId: string;
}


export class PostVideosVideoIdCaptionsLanguageSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class PostVideosVideoIdCaptionsLanguageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostVideosVideoIdCaptionsLanguagePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: shared.CaptionsUploadPayload;

  @SpeakeasyMetadata()
  security: PostVideosVideoIdCaptionsLanguageSecurity;
}


export class PostVideosVideoIdCaptionsLanguageResponse extends SpeakeasyBase {
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
