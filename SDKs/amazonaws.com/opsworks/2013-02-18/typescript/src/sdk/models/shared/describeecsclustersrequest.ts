import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeEcsClustersRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=EcsClusterArns" })
  ecsClusterArns?: string[];

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=StackId" })
  stackId?: string;
}
