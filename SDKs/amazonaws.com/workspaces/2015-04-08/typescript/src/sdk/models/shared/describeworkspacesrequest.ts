import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeWorkspacesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=BundleId" })
  bundleId?: string;

  @Metadata({ data: "json, name=DirectoryId" })
  directoryId?: string;

  @Metadata({ data: "json, name=Limit" })
  limit?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=UserName" })
  userName?: string;

  @Metadata({ data: "json, name=WorkspaceIds" })
  workspaceIds?: string[];
}
