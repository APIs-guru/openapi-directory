import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RemoveNodesHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RemoveNodesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: RemoveNodesHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.DeleteNodesRequest;
}


export class RemoveNodesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
