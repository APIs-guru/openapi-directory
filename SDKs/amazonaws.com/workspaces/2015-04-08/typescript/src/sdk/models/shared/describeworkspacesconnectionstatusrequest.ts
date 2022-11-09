import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeWorkspacesConnectionStatusRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=WorkspaceIds" })
  workspaceIds?: string[];
}
