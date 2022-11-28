import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostVideosVideoIdThumbnailPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=videoId" })
  videoId: string;
}


export class PostVideosVideoIdThumbnailSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class PostVideosVideoIdThumbnailRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostVideosVideoIdThumbnailPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: shared.VideoThumbnailUploadPayload;

  @SpeakeasyMetadata()
  security: PostVideosVideoIdThumbnailSecurity;
}


export class PostVideosVideoIdThumbnailResponse extends SpeakeasyBase {
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
