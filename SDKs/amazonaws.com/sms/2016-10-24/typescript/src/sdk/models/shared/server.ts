import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ServerTypeEnum } from "./servertypeenum";
import { VmServer } from "./vmserver";


// Server
/** 
 * Represents a server.
**/
export class Server extends SpeakeasyBase {
  @Metadata({ data: "json, name=replicationJobId" })
  replicationJobId?: string;

  @Metadata({ data: "json, name=replicationJobTerminated" })
  replicationJobTerminated?: boolean;

  @Metadata({ data: "json, name=serverId" })
  serverId?: string;

  @Metadata({ data: "json, name=serverType" })
  serverType?: ServerTypeEnum;

  @Metadata({ data: "json, name=vmServer" })
  vmServer?: VmServer;
}
