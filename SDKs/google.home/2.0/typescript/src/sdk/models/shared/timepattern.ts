import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TimePattern extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hour" })
  hour: number;

  @SpeakeasyMetadata({ data: "json, name=minute" })
  minute: number;

  @SpeakeasyMetadata({ data: "json, name=second" })
  second: number;
}
