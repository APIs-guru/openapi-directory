import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AlarmVolumeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=volume" })
  volume: number;
}
