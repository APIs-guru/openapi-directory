import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CalendarResource } from "./calendarresource";



// CalendarResources
/** 
 * Public API: Resources.calendars
**/
export class CalendarResources extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: CalendarResource })
  items?: CalendarResource[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
