import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteLiveStreamsLiveStreamIdThumbnailPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=liveStreamId" })
  liveStreamId: string;
}


export class DeleteLiveStreamsLiveStreamIdThumbnailSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class DeleteLiveStreamsLiveStreamIdThumbnailRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteLiveStreamsLiveStreamIdThumbnailPathParams;

  @Metadata()
  security: DeleteLiveStreamsLiveStreamIdThumbnailSecurity;
}


export class DeleteLiveStreamsLiveStreamIdThumbnailResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  liveStream?: shared.LiveStream;

  @Metadata()
  notFound?: shared.NotFound;
}
