import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeRaidArraysRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=InstanceId" })
  instanceId?: string;

  @Metadata({ data: "json, name=RaidArrayIds" })
  raidArrayIds?: string[];

  @Metadata({ data: "json, name=StackId" })
  stackId?: string;
}
