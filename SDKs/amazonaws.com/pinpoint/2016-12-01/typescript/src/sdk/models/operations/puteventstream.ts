import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutEventStreamPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=application-id" })
  applicationId: string;
}


export class PutEventStreamHeaders extends SpeakeasyBase {
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


// PutEventStreamRequestBodyWriteEventStream
/** 
 * Specifies the Amazon Resource Name (ARN) of an event stream to publish events to and the AWS Identity and Access Management (IAM) role to use when publishing those events.
**/
export class PutEventStreamRequestBodyWriteEventStream extends SpeakeasyBase {
  @Metadata({ data: "json, name=DestinationStreamArn" })
  destinationStreamArn?: string;

  @Metadata({ data: "json, name=RoleArn" })
  roleArn?: string;
}


export class PutEventStreamRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=WriteEventStream" })
  writeEventStream: PutEventStreamRequestBodyWriteEventStream;
}


export class PutEventStreamRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutEventStreamPathParams;

  @Metadata()
  headers: PutEventStreamHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: PutEventStreamRequestBody;
}


export class PutEventStreamResponse extends SpeakeasyBase {
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
  putEventStreamResponse?: shared.PutEventStreamResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
