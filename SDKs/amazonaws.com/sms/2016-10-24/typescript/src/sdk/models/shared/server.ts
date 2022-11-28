import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServerTypeEnum } from "./servertypeenum";
import { VmServer } from "./vmserver";



// Server
/** 
 * Represents a server.
**/
export class Server extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=replicationJobId" })
  replicationJobId?: string;

  @SpeakeasyMetadata({ data: "json, name=replicationJobTerminated" })
  replicationJobTerminated?: boolean;

  @SpeakeasyMetadata({ data: "json, name=serverId" })
  serverId?: string;

  @SpeakeasyMetadata({ data: "json, name=serverType" })
  serverType?: ServerTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=vmServer" })
  vmServer?: VmServer;
}
