import { SpeakeasyBase } from "../../../internal/utils";
import { EndpointMessageResult } from "./endpointmessageresult";
import { MessageResult } from "./messageresult";
/**
 * Provides information about the results of a request to send a message to an endpoint address.
**/
export declare class MessageResponse extends SpeakeasyBase {
    applicationId: string;
    endpointResult?: Map<string, EndpointMessageResult>;
    requestId?: string;
    result?: Map<string, MessageResult>;
}
