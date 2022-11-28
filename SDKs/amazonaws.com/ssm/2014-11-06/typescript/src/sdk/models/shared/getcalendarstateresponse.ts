import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CalendarStateEnum } from "./calendarstateenum";



export class GetCalendarStateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AtTime" })
  atTime?: string;

  @SpeakeasyMetadata({ data: "json, name=NextTransitionTime" })
  nextTransitionTime?: string;

  @SpeakeasyMetadata({ data: "json, name=State" })
  state?: CalendarStateEnum;
}
