import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ServerTypeEnum } from "./servertypeenum";
import { VmServer } from "./vmserver";
/**
 * Represents a server.
**/
export declare class Server extends SpeakeasyBase {
    replicationJobId?: string;
    replicationJobTerminated?: boolean;
    serverId?: string;
    serverType?: ServerTypeEnum;
    vmServer?: VmServer;
}
