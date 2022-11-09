import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CalendarDate extends SpeakeasyBase {
  @Metadata({ data: "json, name=all_day" })
  allDay?: boolean;

  @Metadata({ data: "json, name=calendar_category_id" })
  calendarCategoryId?: number;

  @Metadata({ data: "json, name=category" })
  category?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=end_date" })
  endDate?: string;

  @Metadata({ data: "json, name=event_id" })
  eventId?: number;

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=start_date" })
  startDate?: string;

  @Metadata({ data: "json, name=state" })
  state?: string[];

  @Metadata({ data: "json, name=summary" })
  summary?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
