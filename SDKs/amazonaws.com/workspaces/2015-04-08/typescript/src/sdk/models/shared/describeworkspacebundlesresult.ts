import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { WorkspaceBundle } from "./workspacebundle";


export class DescribeWorkspaceBundlesResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=Bundles", elemType: shared.WorkspaceBundle })
  bundles?: WorkspaceBundle[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
