import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RebootRequest
/** 
 * Describes the information used to reboot a WorkSpace.
**/
export class RebootRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=WorkspaceId" })
  workspaceId: string;
}
