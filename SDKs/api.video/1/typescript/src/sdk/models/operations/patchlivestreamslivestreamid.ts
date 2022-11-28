import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PatchLiveStreamsLiveStreamIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=liveStreamId" })
  liveStreamId: string;
}


export class PatchLiveStreamsLiveStreamIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class PatchLiveStreamsLiveStreamIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatchLiveStreamsLiveStreamIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.LiveStreamUpdatePayload;

  @SpeakeasyMetadata()
  security: PatchLiveStreamsLiveStreamIdSecurity;
}


export class PatchLiveStreamsLiveStreamIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  badRequest?: shared.BadRequest;

  @SpeakeasyMetadata()
  liveStream?: shared.LiveStream;
}
