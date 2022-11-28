import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Server } from "./server";



// ServerGroup
/** 
 * Logical grouping of servers.
**/
export class ServerGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=serverGroupId" })
  serverGroupId?: string;

  @SpeakeasyMetadata({ data: "json, name=serverList", elemType: Server })
  serverList?: Server[];
}
