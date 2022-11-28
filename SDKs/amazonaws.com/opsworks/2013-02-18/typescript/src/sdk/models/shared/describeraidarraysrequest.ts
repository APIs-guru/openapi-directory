import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeRaidArraysRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InstanceId" })
  instanceId?: string;

  @SpeakeasyMetadata({ data: "json, name=RaidArrayIds" })
  raidArrayIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=StackId" })
  stackId?: string;
}
