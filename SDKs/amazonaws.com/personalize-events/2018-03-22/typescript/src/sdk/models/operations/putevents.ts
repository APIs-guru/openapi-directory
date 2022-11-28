import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutEventsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


export class PutEventsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=eventList", elemType: shared.Event })
  eventList: shared.Event[];

  @SpeakeasyMetadata({ data: "json, name=sessionId" })
  sessionId: string;

  @SpeakeasyMetadata({ data: "json, name=trackingId" })
  trackingId: string;

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId?: string;
}


export class PutEventsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PutEventsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PutEventsRequestBody;
}


export class PutEventsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invalidInputException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
