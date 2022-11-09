import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RebootRequest
/** 
 * Describes the information used to reboot a WorkSpace.
**/
export class RebootRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=WorkspaceId" })
  workspaceId: string;
}
