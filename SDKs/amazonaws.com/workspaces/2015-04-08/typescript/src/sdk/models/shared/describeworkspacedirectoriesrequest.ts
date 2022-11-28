import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeWorkspaceDirectoriesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DirectoryIds" })
  directoryIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=Limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
