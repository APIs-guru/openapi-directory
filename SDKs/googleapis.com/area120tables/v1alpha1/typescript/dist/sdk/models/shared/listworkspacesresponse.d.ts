import { SpeakeasyBase } from "../../../internal/utils";
import { Workspace } from "./workspace";
/**
 * Response message for TablesService.ListWorkspaces.
**/
export declare class ListWorkspacesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    workspaces?: Workspace[];
}
