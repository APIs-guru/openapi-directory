import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SendMessagesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=application-id" })
  applicationId: string;
}


export class SendMessagesHeaders extends SpeakeasyBase {
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


// SendMessagesRequestBodyMessageRequest
/** 
 * Specifies the configuration and other settings for a message.
**/
export class SendMessagesRequestBodyMessageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Addresses", elemType: shared.AddressConfiguration })
  addresses?: Map<string, shared.AddressConfiguration>;

  @SpeakeasyMetadata({ data: "json, name=Context" })
  context?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=Endpoints", elemType: shared.EndpointSendConfiguration })
  endpoints?: Map<string, shared.EndpointSendConfiguration>;

  @SpeakeasyMetadata({ data: "json, name=MessageConfiguration" })
  messageConfiguration?: shared.DirectMessageConfiguration;

  @SpeakeasyMetadata({ data: "json, name=TemplateConfiguration" })
  templateConfiguration?: shared.TemplateConfiguration;

  @SpeakeasyMetadata({ data: "json, name=TraceId" })
  traceId?: string;
}


export class SendMessagesRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MessageRequest" })
  messageRequest: SendMessagesRequestBodyMessageRequest;
}


export class SendMessagesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SendMessagesPathParams;

  @SpeakeasyMetadata()
  headers: SendMessagesHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: SendMessagesRequestBody;
}


export class SendMessagesResponse extends SpeakeasyBase {
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
  sendMessagesResponse?: shared.SendMessagesResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;
}
