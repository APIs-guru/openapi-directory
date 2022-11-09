import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RequestNodeParentsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=node_id" })
  nodeId: number;
}


export class RequestNodeParentsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RequestNodeParentsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RequestNodeParentsPathParams;

  @Metadata()
  headers: RequestNodeParentsHeaders;
}


export class RequestNodeParentsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  nodeParentList?: shared.NodeParentList;

  @Metadata()
  statusCode: number;
}
