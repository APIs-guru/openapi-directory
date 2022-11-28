import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetCalendarStateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AtTime" })
  atTime?: string;

  @SpeakeasyMetadata({ data: "json, name=CalendarNames" })
  calendarNames: string[];
}
