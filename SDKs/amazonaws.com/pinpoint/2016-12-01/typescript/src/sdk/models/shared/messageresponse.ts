import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EndpointMessageResult } from "./endpointmessageresult";
import { MessageResult } from "./messageresult";



// MessageResponse
/** 
 * Provides information about the results of a request to send a message to an endpoint address.
**/
export class MessageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplicationId" })
  applicationId: string;

  @SpeakeasyMetadata({ data: "json, name=EndpointResult", elemType: EndpointMessageResult })
  endpointResult?: Map<string, EndpointMessageResult>;

  @SpeakeasyMetadata({ data: "json, name=RequestId" })
  requestId?: string;

  @SpeakeasyMetadata({ data: "json, name=Result", elemType: MessageResult })
  result?: Map<string, MessageResult>;
}
