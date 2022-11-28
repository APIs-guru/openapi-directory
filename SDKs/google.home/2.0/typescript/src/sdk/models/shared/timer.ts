import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Timer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fire_time" })
  fireTime: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=original_duration" })
  originalDuration: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: number;
}
