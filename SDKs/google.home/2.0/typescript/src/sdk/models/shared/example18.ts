import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Alarm } from "./alarm";
import { Timer } from "./timer";



export class Example18 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alarm", elemType: Alarm })
  alarm: Alarm[];

  @SpeakeasyMetadata({ data: "json, name=timer", elemType: Timer })
  timer: Timer[];
}
