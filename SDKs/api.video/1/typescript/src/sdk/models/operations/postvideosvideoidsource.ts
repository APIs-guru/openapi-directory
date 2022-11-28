import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostVideosVideoIdSourcePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=videoId" })
  videoId: string;
}


export class PostVideosVideoIdSourceHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Content-Range" })
  contentRange?: string;
}


export class PostVideosVideoIdSourceSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class PostVideosVideoIdSourceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostVideosVideoIdSourcePathParams;

  @SpeakeasyMetadata()
  headers: PostVideosVideoIdSourceHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: shared.VideoUploadPayload;

  @SpeakeasyMetadata()
  security: PostVideosVideoIdSourceSecurity;
}


export class PostVideosVideoIdSourceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  badRequest?: shared.BadRequest;

  @SpeakeasyMetadata()
  notFound?: shared.NotFound;

  @SpeakeasyMetadata()
  video?: shared.Video;
}
