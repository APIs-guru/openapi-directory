import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeVolumesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=InstanceId" })
  instanceId?: string;

  @Metadata({ data: "json, name=RaidArrayId" })
  raidArrayId?: string;

  @Metadata({ data: "json, name=StackId" })
  stackId?: string;

  @Metadata({ data: "json, name=VolumeIds" })
  volumeIds?: string[];
}
