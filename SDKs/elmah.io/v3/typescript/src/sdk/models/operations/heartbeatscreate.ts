import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class HeartbeatsCreatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=logId" })
  logId: string;
}


export class HeartbeatsCreateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  createHeartbeat?: shared.CreateHeartbeat;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  createHeartbeat1?: shared.CreateHeartbeat;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  createHeartbeat2?: shared.CreateHeartbeat;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  createHeartbeat3?: shared.CreateHeartbeat;
}


export class HeartbeatsCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: HeartbeatsCreatePathParams;

  @SpeakeasyMetadata()
  request?: HeartbeatsCreateRequests;
}


export class HeartbeatsCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
