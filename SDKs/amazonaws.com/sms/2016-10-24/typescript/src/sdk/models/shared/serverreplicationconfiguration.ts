import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Server } from "./server";
import { ServerReplicationParameters } from "./serverreplicationparameters";



// ServerReplicationConfiguration
/** 
 * Replication configuration of a server.
**/
export class ServerReplicationConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=server" })
  server?: Server;

  @SpeakeasyMetadata({ data: "json, name=serverReplicationParameters" })
  serverReplicationParameters?: ServerReplicationParameters;
}
