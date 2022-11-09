import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteLiveStreamsLiveStreamIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=liveStreamId" })
  liveStreamId: string;
}


export class DeleteLiveStreamsLiveStreamIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class DeleteLiveStreamsLiveStreamIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteLiveStreamsLiveStreamIdPathParams;

  @Metadata()
  security: DeleteLiveStreamsLiveStreamIdSecurity;
}


export class DeleteLiveStreamsLiveStreamIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
