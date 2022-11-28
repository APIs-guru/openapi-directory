import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeWorkspacesConnectionStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=WorkspaceIds" })
  workspaceIds?: string[];
}
