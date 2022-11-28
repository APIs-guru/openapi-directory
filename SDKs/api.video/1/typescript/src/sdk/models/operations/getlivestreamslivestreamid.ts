import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetLiveStreamsLiveStreamIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=liveStreamId" })
  liveStreamId: string;
}


export class GetLiveStreamsLiveStreamIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class GetLiveStreamsLiveStreamIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetLiveStreamsLiveStreamIdPathParams;

  @SpeakeasyMetadata()
  security: GetLiveStreamsLiveStreamIdSecurity;
}


export class GetLiveStreamsLiveStreamIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  liveStream?: shared.LiveStream;
}
