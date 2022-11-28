import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SendVoiceMessageHeaders extends SpeakeasyBase {
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


// SendVoiceMessageRequestBodyContent
/** 
 * An object that contains a voice message and information about the recipient that you want to send it to.
**/
export class SendVoiceMessageRequestBodyContent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CallInstructionsMessage" })
  callInstructionsMessage?: shared.CallInstructionsMessageType;

  @SpeakeasyMetadata({ data: "json, name=PlainTextMessage" })
  plainTextMessage?: shared.PlainTextMessageType;

  @SpeakeasyMetadata({ data: "json, name=SSMLMessage" })
  ssmlMessage?: shared.SsmlMessageType;
}


export class SendVoiceMessageRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CallerId" })
  callerId?: string;

  @SpeakeasyMetadata({ data: "json, name=ConfigurationSetName" })
  configurationSetName?: string;

  @SpeakeasyMetadata({ data: "json, name=Content" })
  content?: SendVoiceMessageRequestBodyContent;

  @SpeakeasyMetadata({ data: "json, name=DestinationPhoneNumber" })
  destinationPhoneNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=OriginationPhoneNumber" })
  originationPhoneNumber?: string;
}


export class SendVoiceMessageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: SendVoiceMessageHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: SendVoiceMessageRequestBody;
}


export class SendVoiceMessageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServiceErrorException?: any;

  @SpeakeasyMetadata()
  sendVoiceMessageResponse?: shared.SendVoiceMessageResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;
}
