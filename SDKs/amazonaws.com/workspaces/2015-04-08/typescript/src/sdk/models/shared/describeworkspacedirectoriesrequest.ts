import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeWorkspaceDirectoriesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DirectoryIds" })
  directoryIds?: string[];

  @Metadata({ data: "json, name=Limit" })
  limit?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
