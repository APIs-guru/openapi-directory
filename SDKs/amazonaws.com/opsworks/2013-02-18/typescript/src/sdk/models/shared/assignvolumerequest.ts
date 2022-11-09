import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AssignVolumeRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=InstanceId" })
  instanceId?: string;

  @Metadata({ data: "json, name=VolumeId" })
  volumeId: string;
}
