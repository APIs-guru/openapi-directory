import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PatchVideosVideoIdThumbnailPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=videoId" })
  videoId: string;
}


export class PatchVideosVideoIdThumbnailSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class PatchVideosVideoIdThumbnailRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatchVideosVideoIdThumbnailPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.VideoThumbnailPickPayload;

  @SpeakeasyMetadata()
  security: PatchVideosVideoIdThumbnailSecurity;
}


export class PatchVideosVideoIdThumbnailResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  notFound?: shared.NotFound;

  @SpeakeasyMetadata()
  video?: shared.Video;
}
