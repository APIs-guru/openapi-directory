import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WorkspaceDirectory } from "./workspacedirectory";



export class DescribeWorkspaceDirectoriesResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Directories", elemType: WorkspaceDirectory })
  directories?: WorkspaceDirectory[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
