import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteLiveStreamsLiveStreamIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=liveStreamId" })
  liveStreamId: string;
}


export class DeleteLiveStreamsLiveStreamIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class DeleteLiveStreamsLiveStreamIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteLiveStreamsLiveStreamIdPathParams;

  @SpeakeasyMetadata()
  security: DeleteLiveStreamsLiveStreamIdSecurity;
}


export class DeleteLiveStreamsLiveStreamIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
