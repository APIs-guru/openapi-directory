import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeWorkspaceSnapshotsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=WorkspaceId" })
  workspaceId: string;
}
