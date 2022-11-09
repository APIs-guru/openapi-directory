import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostLiveStreamsLiveStreamIdThumbnailPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=liveStreamId" })
  liveStreamId: string;
}


export class PostLiveStreamsLiveStreamIdThumbnailSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class PostLiveStreamsLiveStreamIdThumbnailRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostLiveStreamsLiveStreamIdThumbnailPathParams;

  @Metadata({ data: "request, media_type=multipart/form-data" })
  request?: shared.LiveStreamThumbnailUploadPayload;

  @Metadata()
  security: PostLiveStreamsLiveStreamIdThumbnailSecurity;
}


export class PostLiveStreamsLiveStreamIdThumbnailResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  badRequest?: shared.BadRequest;

  @Metadata()
  liveStream?: shared.LiveStream;

  @Metadata()
  notFound?: shared.NotFound;
}
