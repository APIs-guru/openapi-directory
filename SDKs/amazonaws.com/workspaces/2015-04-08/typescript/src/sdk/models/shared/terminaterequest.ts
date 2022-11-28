import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TerminateRequest
/** 
 * Describes the information used to terminate a WorkSpace.
**/
export class TerminateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=WorkspaceId" })
  workspaceId: string;
}
