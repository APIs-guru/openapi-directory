import { SpeakeasyBase } from "../../../internal/utils";
import { EndpointMessageResult } from "./endpointmessageresult";
/**
 * Provides information about which users and endpoints a message was sent to.
**/
export declare class SendUsersMessageResponse extends SpeakeasyBase {
    applicationId: string;
    requestId?: string;
    result?: Map<string, Map<string, EndpointMessageResult>>;
}
