import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostVideosVideoIdSourcePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=videoId" })
  videoId: string;
}


export class PostVideosVideoIdSourceHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Content-Range" })
  contentRange?: string;
}


export class PostVideosVideoIdSourceSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class PostVideosVideoIdSourceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostVideosVideoIdSourcePathParams;

  @Metadata()
  headers: PostVideosVideoIdSourceHeaders;

  @Metadata({ data: "request, media_type=multipart/form-data" })
  request?: shared.VideoUploadPayload;

  @Metadata()
  security: PostVideosVideoIdSourceSecurity;
}


export class PostVideosVideoIdSourceResponse extends SpeakeasyBase {
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
