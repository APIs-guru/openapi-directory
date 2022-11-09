import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UnsubscribeNodePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=node_id" })
  nodeId: number;
}


export class UnsubscribeNodeHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class UnsubscribeNodeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UnsubscribeNodePathParams;

  @Metadata()
  headers: UnsubscribeNodeHeaders;
}


export class UnsubscribeNodeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
