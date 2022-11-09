import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UnassignVolumeRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=VolumeId" })
  volumeId: string;
}
