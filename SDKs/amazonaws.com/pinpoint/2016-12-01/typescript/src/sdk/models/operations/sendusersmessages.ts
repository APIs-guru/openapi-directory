import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SendUsersMessagesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=application-id" })
  applicationId: string;
}


export class SendUsersMessagesHeaders extends SpeakeasyBase {
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


// SendUsersMessagesRequestBodySendUsersMessageRequest
/** 
 * Specifies the configuration and other settings for a message to send to all the endpoints that are associated with a list of users.
**/
export class SendUsersMessagesRequestBodySendUsersMessageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Context" })
  context?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=MessageConfiguration" })
  messageConfiguration?: shared.DirectMessageConfiguration;

  @SpeakeasyMetadata({ data: "json, name=TemplateConfiguration" })
  templateConfiguration?: shared.TemplateConfiguration;

  @SpeakeasyMetadata({ data: "json, name=TraceId" })
  traceId?: string;

  @SpeakeasyMetadata({ data: "json, name=Users", elemType: shared.EndpointSendConfiguration })
  users?: Map<string, shared.EndpointSendConfiguration>;
}


export class SendUsersMessagesRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SendUsersMessageRequest" })
  sendUsersMessageRequest: SendUsersMessagesRequestBodySendUsersMessageRequest;
}


export class SendUsersMessagesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SendUsersMessagesPathParams;

  @SpeakeasyMetadata()
  headers: SendUsersMessagesHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: SendUsersMessagesRequestBody;
}


export class SendUsersMessagesResponse extends SpeakeasyBase {
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
  sendUsersMessagesResponse?: shared.SendUsersMessagesResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;
}
