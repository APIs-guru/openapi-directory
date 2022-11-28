import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeVolumesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InstanceId" })
  instanceId?: string;

  @SpeakeasyMetadata({ data: "json, name=RaidArrayId" })
  raidArrayId?: string;

  @SpeakeasyMetadata({ data: "json, name=StackId" })
  stackId?: string;

  @SpeakeasyMetadata({ data: "json, name=VolumeIds" })
  volumeIds?: string[];
}
