import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SendVoiceMessageHeaders extends SpeakeasyBase {
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


// SendVoiceMessageRequestBodyContent
/** 
 * An object that contains a voice message and information about the recipient that you want to send it to.
**/
export class SendVoiceMessageRequestBodyContent extends SpeakeasyBase {
  @Metadata({ data: "json, name=CallInstructionsMessage" })
  callInstructionsMessage?: shared.CallInstructionsMessageType;

  @Metadata({ data: "json, name=PlainTextMessage" })
  plainTextMessage?: shared.PlainTextMessageType;

  @Metadata({ data: "json, name=SSMLMessage" })
  ssmlMessage?: shared.SsmlMessageType;
}


export class SendVoiceMessageRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=CallerId" })
  callerId?: string;

  @Metadata({ data: "json, name=ConfigurationSetName" })
  configurationSetName?: string;

  @Metadata({ data: "json, name=Content" })
  content?: SendVoiceMessageRequestBodyContent;

  @Metadata({ data: "json, name=DestinationPhoneNumber" })
  destinationPhoneNumber?: string;

  @Metadata({ data: "json, name=OriginationPhoneNumber" })
  originationPhoneNumber?: string;
}


export class SendVoiceMessageRequest extends SpeakeasyBase {
  @Metadata()
  headers: SendVoiceMessageHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: SendVoiceMessageRequestBody;
}


export class SendVoiceMessageResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServiceErrorException?: any;

  @Metadata()
  sendVoiceMessageResponse?: shared.SendVoiceMessageResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
