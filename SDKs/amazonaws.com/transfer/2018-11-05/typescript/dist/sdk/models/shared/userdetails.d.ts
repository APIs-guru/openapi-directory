import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies the user name, server ID, and session ID for a workflow.
**/
export declare class UserDetails extends SpeakeasyBase {
    serverId: string;
    sessionId?: string;
    userName: string;
}
