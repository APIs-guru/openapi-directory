import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutEventsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=application-id" })
  applicationId: string;
}


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


// PutEventsRequestBodyEventsRequest
/** 
 * Specifies a batch of events to process.
**/
export class PutEventsRequestBodyEventsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=BatchItem", elemType: shared.EventsBatch })
  batchItem?: Map<string, shared.EventsBatch>;
}


export class PutEventsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=EventsRequest" })
  eventsRequest: PutEventsRequestBodyEventsRequest;
}


export class PutEventsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutEventsPathParams;

  @Metadata()
  headers: PutEventsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: PutEventsRequestBody;
}


export class PutEventsResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  forbiddenException?: any;

  @Metadata()
  internalServerErrorException?: any;

  @Metadata()
  methodNotAllowedException?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  payloadTooLargeException?: any;

  @Metadata()
  putEventsResponse?: shared.PutEventsResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
