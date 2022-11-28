import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DatePattern } from "./datepattern";
import { TimePattern } from "./timepattern";



export class Alarm extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=date_pattern" })
  datePattern: DatePattern;

  @SpeakeasyMetadata({ data: "json, name=fire_time" })
  fireTime: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: number;

  @SpeakeasyMetadata({ data: "json, name=time_pattern" })
  timePattern: TimePattern;
}
