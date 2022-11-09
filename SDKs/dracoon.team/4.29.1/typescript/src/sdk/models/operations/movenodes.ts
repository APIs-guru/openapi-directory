import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class MoveNodesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=node_id" })
  nodeId: number;
}


export class MoveNodesHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" })
  xSdsDateFormat?: any;
}


export class MoveNodesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: MoveNodesPathParams;

  @Metadata()
  headers: MoveNodesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.MoveNodesRequest;
}


export class MoveNodesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  node?: shared.Node;

  @Metadata()
  statusCode: number;

  @Metadata()
  moveNodes204ApplicationJsonString?: string;
}
