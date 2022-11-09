import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EndpointMessageResult } from "./endpointmessageresult";


// SendUsersMessageResponse
/** 
 * Provides information about which users and endpoints a message was sent to.
**/
export class SendUsersMessageResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApplicationId" })
  applicationId: string;

  @Metadata({ data: "json, name=RequestId" })
  requestId?: string;

  @Metadata({ data: "json, name=Result", elemType: shared.EndpointMessageResult, elemDepth: 2 })
  result?: Map<string, Map<string, EndpointMessageResult>>;
}
