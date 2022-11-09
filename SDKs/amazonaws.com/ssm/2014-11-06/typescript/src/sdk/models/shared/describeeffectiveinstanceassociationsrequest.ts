import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeEffectiveInstanceAssociationsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=InstanceId" })
  instanceId: string;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
