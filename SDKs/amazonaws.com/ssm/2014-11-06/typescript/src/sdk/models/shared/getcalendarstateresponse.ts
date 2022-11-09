import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CalendarStateEnum } from "./calendarstateenum";


export class GetCalendarStateResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AtTime" })
  atTime?: string;

  @Metadata({ data: "json, name=NextTransitionTime" })
  nextTransitionTime?: string;

  @Metadata({ data: "json, name=State" })
  state?: CalendarStateEnum;
}
