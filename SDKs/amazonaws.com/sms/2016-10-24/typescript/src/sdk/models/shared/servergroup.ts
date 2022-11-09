import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Server } from "./server";


// ServerGroup
/** 
 * Logical grouping of servers.
**/
export class ServerGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=serverGroupId" })
  serverGroupId?: string;

  @Metadata({ data: "json, name=serverList", elemType: shared.Server })
  serverList?: Server[];
}
