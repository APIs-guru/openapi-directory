import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Server } from "./server";
import { ServerReplicationParameters } from "./serverreplicationparameters";
/**
 * Replication configuration of a server.
**/
export declare class ServerReplicationConfiguration extends SpeakeasyBase {
    server?: Server;
    serverReplicationParameters?: ServerReplicationParameters;
}
