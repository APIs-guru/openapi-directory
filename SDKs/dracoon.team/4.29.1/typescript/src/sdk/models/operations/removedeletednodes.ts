import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RemoveDeletedNodesHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RemoveDeletedNodesRequest extends SpeakeasyBase {
  @Metadata()
  headers: RemoveDeletedNodesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeleteDeletedNodesRequest;
}


export class RemoveDeletedNodesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
