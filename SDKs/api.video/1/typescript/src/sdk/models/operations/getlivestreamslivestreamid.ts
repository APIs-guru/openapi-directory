import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetLiveStreamsLiveStreamIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=liveStreamId" })
  liveStreamId: string;
}


export class GetLiveStreamsLiveStreamIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class GetLiveStreamsLiveStreamIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetLiveStreamsLiveStreamIdPathParams;

  @Metadata()
  security: GetLiveStreamsLiveStreamIdSecurity;
}


export class GetLiveStreamsLiveStreamIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  liveStream?: shared.LiveStream;
}
