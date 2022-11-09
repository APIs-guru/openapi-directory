import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeInstancePatchStatesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=InstanceIds" })
  instanceIds: string[];

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
