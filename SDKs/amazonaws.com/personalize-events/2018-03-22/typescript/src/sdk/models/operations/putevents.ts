import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutEventsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


export class PutEventsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=eventList", elemType: shared.Event })
  eventList: shared.Event[];

  @Metadata({ data: "json, name=sessionId" })
  sessionId: string;

  @Metadata({ data: "json, name=trackingId" })
  trackingId: string;

  @Metadata({ data: "json, name=userId" })
  userId?: string;
}


export class PutEventsRequest extends SpeakeasyBase {
  @Metadata()
  headers: PutEventsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: PutEventsRequestBody;
}


export class PutEventsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  statusCode: number;
}
