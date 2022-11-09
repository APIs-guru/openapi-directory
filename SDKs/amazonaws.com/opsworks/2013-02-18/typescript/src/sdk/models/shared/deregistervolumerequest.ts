import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeregisterVolumeRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=VolumeId" })
  volumeId: string;
}
