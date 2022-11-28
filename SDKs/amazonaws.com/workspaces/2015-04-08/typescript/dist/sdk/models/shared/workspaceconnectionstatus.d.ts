import { SpeakeasyBase } from "../../../internal/utils";
import { ConnectionStateEnum } from "./connectionstateenum";
/**
 * Describes the connection status of a WorkSpace.
**/
export declare class WorkspaceConnectionStatus extends SpeakeasyBase {
    connectionState?: ConnectionStateEnum;
    connectionStateCheckTimestamp?: Date;
    lastKnownUserConnectionTimestamp?: Date;
    workspaceId?: string;
}
