import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WorkspaceBundle } from "./workspacebundle";



export class DescribeWorkspaceBundlesResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Bundles", elemType: WorkspaceBundle })
  bundles?: WorkspaceBundle[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
