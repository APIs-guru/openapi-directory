import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AlarmVolumeRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=volume" })
  volume: number;
}
