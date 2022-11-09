import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RebuildRequest
/** 
 * Describes the information used to rebuild a WorkSpace.
**/
export class RebuildRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=WorkspaceId" })
  workspaceId: string;
}
