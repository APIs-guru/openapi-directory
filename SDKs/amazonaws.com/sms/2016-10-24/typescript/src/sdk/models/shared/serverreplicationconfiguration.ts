import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Server } from "./server";
import { ServerReplicationParameters } from "./serverreplicationparameters";


// ServerReplicationConfiguration
/** 
 * Replication configuration of a server.
**/
export class ServerReplicationConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=server" })
  server?: Server;

  @Metadata({ data: "json, name=serverReplicationParameters" })
  serverReplicationParameters?: ServerReplicationParameters;
}
