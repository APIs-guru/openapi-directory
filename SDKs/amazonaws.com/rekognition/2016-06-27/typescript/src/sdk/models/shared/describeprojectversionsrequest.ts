import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeProjectVersionsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ProjectArn" })
  projectArn: string;

  @Metadata({ data: "json, name=VersionNames" })
  versionNames?: string[];
}
