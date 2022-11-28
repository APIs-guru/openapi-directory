import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RebuildRequest
/** 
 * Describes the information used to rebuild a WorkSpace.
**/
export class RebuildRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=WorkspaceId" })
  workspaceId: string;
}
