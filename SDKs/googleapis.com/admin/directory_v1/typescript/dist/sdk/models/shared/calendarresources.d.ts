import { SpeakeasyBase } from "../../../internal/utils";
import { CalendarResource } from "./calendarresource";
/**
 * Public API: Resources.calendars
**/
export declare class CalendarResources extends SpeakeasyBase {
    etag?: string;
    items?: CalendarResource[];
    kind?: string;
    nextPageToken?: string;
}
