import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Workspace } from "./workspace";


// ListWorkspacesResponse
/** 
 * Response message for TablesService.ListWorkspaces.
**/
export class ListWorkspacesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=workspaces", elemType: shared.Workspace })
  workspaces?: Workspace[];
}
