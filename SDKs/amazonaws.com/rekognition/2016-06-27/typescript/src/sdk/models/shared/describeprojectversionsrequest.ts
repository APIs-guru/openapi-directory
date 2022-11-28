import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeProjectVersionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ProjectArn" })
  projectArn: string;

  @SpeakeasyMetadata({ data: "json, name=VersionNames" })
  versionNames?: string[];
}
