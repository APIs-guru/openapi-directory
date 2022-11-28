import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostLiveStreamsLiveStreamIdThumbnailPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=liveStreamId" })
  liveStreamId: string;
}


export class PostLiveStreamsLiveStreamIdThumbnailSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class PostLiveStreamsLiveStreamIdThumbnailRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostLiveStreamsLiveStreamIdThumbnailPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: shared.LiveStreamThumbnailUploadPayload;

  @SpeakeasyMetadata()
  security: PostLiveStreamsLiveStreamIdThumbnailSecurity;
}


export class PostLiveStreamsLiveStreamIdThumbnailResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  badRequest?: shared.BadRequest;

  @SpeakeasyMetadata()
  liveStream?: shared.LiveStream;

  @SpeakeasyMetadata()
  notFound?: shared.NotFound;
}
