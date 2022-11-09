import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CopyNodesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=node_id" })
  nodeId: number;
}


export class CopyNodesHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" })
  xSdsDateFormat?: any;
}


export class CopyNodesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CopyNodesPathParams;

  @Metadata()
  headers: CopyNodesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CopyNodesRequest;
}


export class CopyNodesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  node?: shared.Node;

  @Metadata()
  statusCode: number;

  @Metadata()
  copyNodes204ApplicationJsonString?: string;
}
