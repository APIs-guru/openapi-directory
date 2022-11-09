import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { WorkspaceDirectory } from "./workspacedirectory";


export class DescribeWorkspaceDirectoriesResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=Directories", elemType: shared.WorkspaceDirectory })
  directories?: WorkspaceDirectory[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
