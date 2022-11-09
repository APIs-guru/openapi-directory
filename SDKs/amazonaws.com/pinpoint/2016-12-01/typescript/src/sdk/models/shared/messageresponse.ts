import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EndpointMessageResult } from "./endpointmessageresult";
import { MessageResult } from "./messageresult";


// MessageResponse
/** 
 * Provides information about the results of a request to send a message to an endpoint address.
**/
export class MessageResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApplicationId" })
  applicationId: string;

  @Metadata({ data: "json, name=EndpointResult", elemType: shared.EndpointMessageResult })
  endpointResult?: Map<string, EndpointMessageResult>;

  @Metadata({ data: "json, name=RequestId" })
  requestId?: string;

  @Metadata({ data: "json, name=Result", elemType: shared.MessageResult })
  result?: Map<string, MessageResult>;
}
