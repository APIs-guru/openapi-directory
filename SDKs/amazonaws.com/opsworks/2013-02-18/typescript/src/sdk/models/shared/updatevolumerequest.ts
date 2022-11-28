import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateVolumeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MountPoint" })
  mountPoint?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=VolumeId" })
  volumeId: string;
}
