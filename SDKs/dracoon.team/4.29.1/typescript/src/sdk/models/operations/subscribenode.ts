import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SubscribeNodePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=node_id" })
  nodeId: number;
}


export class SubscribeNodeHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class SubscribeNodeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SubscribeNodePathParams;

  @SpeakeasyMetadata()
  headers: SubscribeNodeHeaders;
}


export class SubscribeNodeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  subscribedNode?: shared.SubscribedNode;
}
