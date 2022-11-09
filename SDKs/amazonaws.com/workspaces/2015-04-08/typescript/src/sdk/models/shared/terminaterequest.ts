import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TerminateRequest
/** 
 * Describes the information used to terminate a WorkSpace.
**/
export class TerminateRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=WorkspaceId" })
  workspaceId: string;
}
