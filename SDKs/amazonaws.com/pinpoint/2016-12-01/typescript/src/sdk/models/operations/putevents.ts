import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutEventsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=application-id" })
  applicationId: string;
}


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


// PutEventsRequestBodyEventsRequest
/** 
 * Specifies a batch of events to process.
**/
export class PutEventsRequestBodyEventsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BatchItem", elemType: shared.EventsBatch })
  batchItem?: Map<string, shared.EventsBatch>;
}


export class PutEventsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EventsRequest" })
  eventsRequest: PutEventsRequestBodyEventsRequest;
}


export class PutEventsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutEventsPathParams;

  @SpeakeasyMetadata()
  headers: PutEventsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PutEventsRequestBody;
}


export class PutEventsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  forbiddenException?: any;

  @SpeakeasyMetadata()
  internalServerErrorException?: any;

  @SpeakeasyMetadata()
  methodNotAllowedException?: any;

  @SpeakeasyMetadata()
  notFoundException?: any;

  @SpeakeasyMetadata()
  payloadTooLargeException?: any;

  @SpeakeasyMetadata()
  putEventsResponse?: shared.PutEventsResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;
}
