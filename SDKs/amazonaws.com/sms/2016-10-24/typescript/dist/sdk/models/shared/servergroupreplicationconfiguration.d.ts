import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ServerReplicationConfiguration } from "./serverreplicationconfiguration";
/**
 * Replication configuration for a server group.
**/
export declare class ServerGroupReplicationConfiguration extends SpeakeasyBase {
    serverGroupId?: string;
    serverReplicationConfigurations?: ServerReplicationConfiguration[];
}
