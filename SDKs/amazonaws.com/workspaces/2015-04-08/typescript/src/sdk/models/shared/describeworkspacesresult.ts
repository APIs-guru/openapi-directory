import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Workspace } from "./workspace";


export class DescribeWorkspacesResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=Workspaces", elemType: shared.Workspace })
  workspaces?: Workspace[];
}
