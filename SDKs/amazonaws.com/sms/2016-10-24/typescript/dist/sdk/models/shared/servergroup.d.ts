import { SpeakeasyBase } from "../../../internal/utils";
import { Server } from "./server";
/**
 * Logical grouping of servers.
**/
export declare class ServerGroup extends SpeakeasyBase {
    name?: string;
    serverGroupId?: string;
    serverList?: Server[];
}
