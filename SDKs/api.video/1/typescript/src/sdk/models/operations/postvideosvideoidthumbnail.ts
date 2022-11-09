import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostVideosVideoIdThumbnailPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=videoId" })
  videoId: string;
}


export class PostVideosVideoIdThumbnailSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class PostVideosVideoIdThumbnailRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostVideosVideoIdThumbnailPathParams;

  @Metadata({ data: "request, media_type=multipart/form-data" })
  request?: shared.VideoThumbnailUploadPayload;

  @Metadata()
  security: PostVideosVideoIdThumbnailSecurity;
}


export class PostVideosVideoIdThumbnailResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  badRequest?: shared.BadRequest;

  @Metadata()
  notFound?: shared.NotFound;

  @Metadata()
  video?: shared.Video;
}
