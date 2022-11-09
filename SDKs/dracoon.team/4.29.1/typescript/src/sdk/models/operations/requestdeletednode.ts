import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RequestDeletedNodePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=deleted_node_id" })
  deletedNodeId: number;
}


export class RequestDeletedNodeHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" })
  xSdsDateFormat?: any;
}


export class RequestDeletedNodeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RequestDeletedNodePathParams;

  @Metadata()
  headers: RequestDeletedNodeHeaders;
}


export class RequestDeletedNodeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deletedNode?: shared.DeletedNode;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
