import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SendUsersMessagesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=application-id" })
  applicationId: string;
}


export class SendUsersMessagesHeaders extends SpeakeasyBase {
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


// SendUsersMessagesRequestBodySendUsersMessageRequest
/** 
 * Specifies the configuration and other settings for a message to send to all the endpoints that are associated with a list of users.
**/
export class SendUsersMessagesRequestBodySendUsersMessageRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Context" })
  context?: Map<string, string>;

  @Metadata({ data: "json, name=MessageConfiguration" })
  messageConfiguration?: shared.DirectMessageConfiguration;

  @Metadata({ data: "json, name=TemplateConfiguration" })
  templateConfiguration?: shared.TemplateConfiguration;

  @Metadata({ data: "json, name=TraceId" })
  traceId?: string;

  @Metadata({ data: "json, name=Users", elemType: shared.EndpointSendConfiguration })
  users?: Map<string, shared.EndpointSendConfiguration>;
}


export class SendUsersMessagesRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=SendUsersMessageRequest" })
  sendUsersMessageRequest: SendUsersMessagesRequestBodySendUsersMessageRequest;
}


export class SendUsersMessagesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SendUsersMessagesPathParams;

  @Metadata()
  headers: SendUsersMessagesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: SendUsersMessagesRequestBody;
}


export class SendUsersMessagesResponse extends SpeakeasyBase {
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
  sendUsersMessagesResponse?: shared.SendUsersMessagesResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
