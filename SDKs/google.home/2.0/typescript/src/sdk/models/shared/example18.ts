import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Alarm } from "./alarm";
import { Timer } from "./timer";


export class Example18 extends SpeakeasyBase {
  @Metadata({ data: "json, name=alarm", elemType: shared.Alarm })
  alarm: Alarm[];

  @Metadata({ data: "json, name=timer", elemType: shared.Timer })
  timer: Timer[];
}
