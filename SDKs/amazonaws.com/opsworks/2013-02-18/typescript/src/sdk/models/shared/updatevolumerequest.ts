import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateVolumeRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=MountPoint" })
  mountPoint?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=VolumeId" })
  volumeId: string;
}
