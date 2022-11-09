import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PatchLiveStreamsLiveStreamIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=liveStreamId" })
  liveStreamId: string;
}


export class PatchLiveStreamsLiveStreamIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class PatchLiveStreamsLiveStreamIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PatchLiveStreamsLiveStreamIdPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.LiveStreamUpdatePayload;

  @Metadata()
  security: PatchLiveStreamsLiveStreamIdSecurity;
}


export class PatchLiveStreamsLiveStreamIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  badRequest?: shared.BadRequest;

  @Metadata()
  liveStream?: shared.LiveStream;
}
