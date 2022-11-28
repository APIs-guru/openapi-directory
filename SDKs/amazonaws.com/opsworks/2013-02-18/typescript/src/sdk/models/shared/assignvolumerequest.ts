import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AssignVolumeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InstanceId" })
  instanceId?: string;

  @SpeakeasyMetadata({ data: "json, name=VolumeId" })
  volumeId: string;
}
