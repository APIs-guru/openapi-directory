import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeregisterVolumeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=VolumeId" })
  volumeId: string;
}
