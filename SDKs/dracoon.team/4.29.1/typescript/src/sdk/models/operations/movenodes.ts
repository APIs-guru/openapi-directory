import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class MoveNodesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=node_id" })
  nodeId: number;
}


export class MoveNodesHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" })
  xSdsDateFormat?: any;
}


export class MoveNodesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: MoveNodesPathParams;

  @SpeakeasyMetadata()
  headers: MoveNodesHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.MoveNodesRequest;
}


export class MoveNodesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  node?: shared.Node;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  moveNodes204ApplicationJsonString?: string;
}
