import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CalendarDate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=all_day" })
  allDay?: boolean;

  @SpeakeasyMetadata({ data: "json, name=calendar_category_id" })
  calendarCategoryId?: number;

  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=end_date" })
  endDate?: string;

  @SpeakeasyMetadata({ data: "json, name=event_id" })
  eventId?: number;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=start_date" })
  startDate?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: string[];

  @SpeakeasyMetadata({ data: "json, name=summary" })
  summary?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
