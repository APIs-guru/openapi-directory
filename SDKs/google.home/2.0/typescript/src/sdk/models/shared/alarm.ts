import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DatePattern } from "./datepattern";
import { TimePattern } from "./timepattern";


export class Alarm extends SpeakeasyBase {
  @Metadata({ data: "json, name=date_pattern" })
  datePattern: DatePattern;

  @Metadata({ data: "json, name=fire_time" })
  fireTime: number;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=status" })
  status: number;

  @Metadata({ data: "json, name=time_pattern" })
  timePattern: TimePattern;
}
