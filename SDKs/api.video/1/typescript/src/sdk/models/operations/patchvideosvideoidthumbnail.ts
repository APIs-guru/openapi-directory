import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PatchVideosVideoIdThumbnailPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=videoId" })
  videoId: string;
}


export class PatchVideosVideoIdThumbnailSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class PatchVideosVideoIdThumbnailRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PatchVideosVideoIdThumbnailPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.VideoThumbnailPickPayload;

  @Metadata()
  security: PatchVideosVideoIdThumbnailSecurity;
}


export class PatchVideosVideoIdThumbnailResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  notFound?: shared.NotFound;

  @Metadata()
  video?: shared.Video;
}
