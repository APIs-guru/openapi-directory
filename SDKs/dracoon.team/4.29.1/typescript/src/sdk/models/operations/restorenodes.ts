import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RestoreNodesHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RestoreNodesRequest extends SpeakeasyBase {
  @Metadata()
  headers: RestoreNodesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.RestoreDeletedNodesRequest;
}


export class RestoreNodesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
