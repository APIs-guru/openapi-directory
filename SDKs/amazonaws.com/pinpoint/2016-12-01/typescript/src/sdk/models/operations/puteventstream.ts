import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutEventStreamPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=application-id" })
  applicationId: string;
}


export class PutEventStreamHeaders extends SpeakeasyBase {
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


// PutEventStreamRequestBodyWriteEventStream
/** 
 * Specifies the Amazon Resource Name (ARN) of an event stream to publish events to and the AWS Identity and Access Management (IAM) role to use when publishing those events.
**/
export class PutEventStreamRequestBodyWriteEventStream extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DestinationStreamArn" })
  destinationStreamArn?: string;

  @SpeakeasyMetadata({ data: "json, name=RoleArn" })
  roleArn?: string;
}


export class PutEventStreamRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=WriteEventStream" })
  writeEventStream: PutEventStreamRequestBodyWriteEventStream;
}


export class PutEventStreamRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutEventStreamPathParams;

  @SpeakeasyMetadata()
  headers: PutEventStreamHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PutEventStreamRequestBody;
}


export class PutEventStreamResponse extends SpeakeasyBase {
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
  putEventStreamResponse?: shared.PutEventStreamResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;
}
