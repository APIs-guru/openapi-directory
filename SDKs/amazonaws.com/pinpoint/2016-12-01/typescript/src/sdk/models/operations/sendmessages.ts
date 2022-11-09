import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SendMessagesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=application-id" })
  applicationId: string;
}


export class SendMessagesHeaders extends SpeakeasyBase {
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


// SendMessagesRequestBodyMessageRequest
/** 
 * Specifies the configuration and other settings for a message.
**/
export class SendMessagesRequestBodyMessageRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Addresses", elemType: shared.AddressConfiguration })
  addresses?: Map<string, shared.AddressConfiguration>;

  @Metadata({ data: "json, name=Context" })
  context?: Map<string, string>;

  @Metadata({ data: "json, name=Endpoints", elemType: shared.EndpointSendConfiguration })
  endpoints?: Map<string, shared.EndpointSendConfiguration>;

  @Metadata({ data: "json, name=MessageConfiguration" })
  messageConfiguration?: shared.DirectMessageConfiguration;

  @Metadata({ data: "json, name=TemplateConfiguration" })
  templateConfiguration?: shared.TemplateConfiguration;

  @Metadata({ data: "json, name=TraceId" })
  traceId?: string;
}


export class SendMessagesRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=MessageRequest" })
  messageRequest: SendMessagesRequestBodyMessageRequest;
}


export class SendMessagesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SendMessagesPathParams;

  @Metadata()
  headers: SendMessagesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: SendMessagesRequestBody;
}


export class SendMessagesResponse extends SpeakeasyBase {
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
  sendMessagesResponse?: shared.SendMessagesResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
