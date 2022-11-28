import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CopyNodesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=node_id" })
  nodeId: number;
}


export class CopyNodesHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" })
  xSdsDateFormat?: any;
}


export class CopyNodesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CopyNodesPathParams;

  @SpeakeasyMetadata()
  headers: CopyNodesHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CopyNodesRequest;
}


export class CopyNodesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  node?: shared.Node;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  copyNodes204ApplicationJsonString?: string;
}
