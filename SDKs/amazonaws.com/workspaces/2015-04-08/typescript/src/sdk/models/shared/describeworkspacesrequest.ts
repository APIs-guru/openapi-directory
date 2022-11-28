import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeWorkspacesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BundleId" })
  bundleId?: string;

  @SpeakeasyMetadata({ data: "json, name=DirectoryId" })
  directoryId?: string;

  @SpeakeasyMetadata({ data: "json, name=Limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=UserName" })
  userName?: string;

  @SpeakeasyMetadata({ data: "json, name=WorkspaceIds" })
  workspaceIds?: string[];
}
