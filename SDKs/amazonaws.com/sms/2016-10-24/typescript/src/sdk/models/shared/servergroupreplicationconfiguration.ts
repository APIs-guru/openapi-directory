import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServerReplicationConfiguration } from "./serverreplicationconfiguration";



// ServerGroupReplicationConfiguration
/** 
 * Replication configuration for a server group.
**/
export class ServerGroupReplicationConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=serverGroupId" })
  serverGroupId?: string;

  @SpeakeasyMetadata({ data: "json, name=serverReplicationConfigurations", elemType: ServerReplicationConfiguration })
  serverReplicationConfigurations?: ServerReplicationConfiguration[];
}
