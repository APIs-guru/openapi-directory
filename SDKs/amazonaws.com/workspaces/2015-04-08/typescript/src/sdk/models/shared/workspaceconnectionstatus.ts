import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConnectionStateEnum } from "./connectionstateenum";



// WorkspaceConnectionStatus
/** 
 * Describes the connection status of a WorkSpace.
**/
export class WorkspaceConnectionStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConnectionState" })
  connectionState?: ConnectionStateEnum;

  @SpeakeasyMetadata({ data: "json, name=ConnectionStateCheckTimestamp" })
  connectionStateCheckTimestamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=LastKnownUserConnectionTimestamp" })
  lastKnownUserConnectionTimestamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=WorkspaceId" })
  workspaceId?: string;
}
