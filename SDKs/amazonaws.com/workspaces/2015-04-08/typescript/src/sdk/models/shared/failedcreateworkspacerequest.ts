import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WorkspaceRequest } from "./workspacerequest";



// FailedCreateWorkspaceRequest
/** 
 * Describes a WorkSpace that cannot be created.
**/
export class FailedCreateWorkspaceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ErrorCode" })
  errorCode?: string;

  @SpeakeasyMetadata({ data: "json, name=ErrorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=WorkspaceRequest" })
  workspaceRequest?: WorkspaceRequest;
}
