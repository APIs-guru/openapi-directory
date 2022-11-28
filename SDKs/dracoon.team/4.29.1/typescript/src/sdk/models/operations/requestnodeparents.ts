import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RequestNodeParentsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=node_id" })
  nodeId: number;
}


export class RequestNodeParentsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RequestNodeParentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RequestNodeParentsPathParams;

  @SpeakeasyMetadata()
  headers: RequestNodeParentsHeaders;
}


export class RequestNodeParentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  nodeParentList?: shared.NodeParentList;

  @SpeakeasyMetadata()
  statusCode: number;
}
