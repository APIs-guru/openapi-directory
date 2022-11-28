import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Workspace } from "./workspace";



export class DescribeWorkspacesResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Workspaces", elemType: Workspace })
  workspaces?: Workspace[];
}
