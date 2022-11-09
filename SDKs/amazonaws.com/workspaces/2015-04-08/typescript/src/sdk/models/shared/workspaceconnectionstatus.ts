import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConnectionStateEnum } from "./connectionstateenum";


// WorkspaceConnectionStatus
/** 
 * Describes the connection status of a WorkSpace.
**/
export class WorkspaceConnectionStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConnectionState" })
  connectionState?: ConnectionStateEnum;

  @Metadata({ data: "json, name=ConnectionStateCheckTimestamp" })
  connectionStateCheckTimestamp?: Date;

  @Metadata({ data: "json, name=LastKnownUserConnectionTimestamp" })
  lastKnownUserConnectionTimestamp?: Date;

  @Metadata({ data: "json, name=WorkspaceId" })
  workspaceId?: string;
}
