import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class HeartbeatsCreatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=logId" })
  logId: string;
}


export class HeartbeatsCreateRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  createHeartbeat?: shared.CreateHeartbeat;

  @Metadata({ data: "request, media_type=application/json" })
  createHeartbeat1?: shared.CreateHeartbeat;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  createHeartbeat2?: shared.CreateHeartbeat;

  @Metadata({ data: "request, media_type=text/json" })
  createHeartbeat3?: shared.CreateHeartbeat;
}


export class HeartbeatsCreateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: HeartbeatsCreatePathParams;

  @Metadata()
  request?: HeartbeatsCreateRequests;
}


export class HeartbeatsCreateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
