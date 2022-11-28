import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EndpointMessageResult } from "./endpointmessageresult";



// SendUsersMessageResponse
/** 
 * Provides information about which users and endpoints a message was sent to.
**/
export class SendUsersMessageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplicationId" })
  applicationId: string;

  @SpeakeasyMetadata({ data: "json, name=RequestId" })
  requestId?: string;

  @SpeakeasyMetadata({ data: "json, name=Result", elemType: EndpointMessageResult, elemDepth: 2 })
  result?: Map<string, Map<string, EndpointMessageResult>>;
}
