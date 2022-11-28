import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UnassignVolumeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=VolumeId" })
  volumeId: string;
}
