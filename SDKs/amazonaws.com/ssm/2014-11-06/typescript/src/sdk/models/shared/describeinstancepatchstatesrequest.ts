import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeInstancePatchStatesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InstanceIds" })
  instanceIds: string[];

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
