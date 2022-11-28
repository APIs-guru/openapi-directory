import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Workspace } from "./workspace";



// ListWorkspacesResponse
/** 
 * Response message for TablesService.ListWorkspaces.
**/
export class ListWorkspacesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=workspaces", elemType: Workspace })
  workspaces?: Workspace[];
}
