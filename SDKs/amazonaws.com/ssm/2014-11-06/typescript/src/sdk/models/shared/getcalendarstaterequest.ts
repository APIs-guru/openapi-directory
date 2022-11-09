import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetCalendarStateRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AtTime" })
  atTime?: string;

  @Metadata({ data: "json, name=CalendarNames" })
  calendarNames: string[];
}
