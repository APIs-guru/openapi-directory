import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ServerReplicationConfiguration } from "./serverreplicationconfiguration";


// ServerGroupReplicationConfiguration
/** 
 * Replication configuration for a server group.
**/
export class ServerGroupReplicationConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=serverGroupId" })
  serverGroupId?: string;

  @Metadata({ data: "json, name=serverReplicationConfigurations", elemType: shared.ServerReplicationConfiguration })
  serverReplicationConfigurations?: ServerReplicationConfiguration[];
}
