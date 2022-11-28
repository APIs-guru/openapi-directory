import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeEcsClustersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EcsClusterArns" })
  ecsClusterArns?: string[];

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=StackId" })
  stackId?: string;
}
