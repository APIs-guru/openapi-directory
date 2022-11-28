import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteLiveStreamsLiveStreamIdThumbnailPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=liveStreamId" })
  liveStreamId: string;
}


export class DeleteLiveStreamsLiveStreamIdThumbnailSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class DeleteLiveStreamsLiveStreamIdThumbnailRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteLiveStreamsLiveStreamIdThumbnailPathParams;

  @SpeakeasyMetadata()
  security: DeleteLiveStreamsLiveStreamIdThumbnailSecurity;
}


export class DeleteLiveStreamsLiveStreamIdThumbnailResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  liveStream?: shared.LiveStream;

  @SpeakeasyMetadata()
  notFound?: shared.NotFound;
}
