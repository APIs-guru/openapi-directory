import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { WorkspaceRequest } from "./workspacerequest";


// FailedCreateWorkspaceRequest
/** 
 * Describes a WorkSpace that cannot be created.
**/
export class FailedCreateWorkspaceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ErrorCode" })
  errorCode?: string;

  @Metadata({ data: "json, name=ErrorMessage" })
  errorMessage?: string;

  @Metadata({ data: "json, name=WorkspaceRequest" })
  workspaceRequest?: WorkspaceRequest;
}
