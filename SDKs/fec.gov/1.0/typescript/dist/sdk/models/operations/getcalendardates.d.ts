import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCalendarDatesQueryParams extends SpeakeasyBase {
    apiKey: string;
    calendarCategoryId?: number[];
    description?: string[];
    eventId?: number;
    maxEndDate?: Date;
    maxStartDate?: Date;
    minEndDate?: Date;
    minStartDate?: Date;
    page?: number;
    perPage?: number;
    sort?: string;
    sortHideNull?: boolean;
    sortNullOnly?: boolean;
    sortNullsLast?: boolean;
    summary?: string[];
}
export declare class GetCalendarDatesRequest extends SpeakeasyBase {
    queryParams: GetCalendarDatesQueryParams;
}
export declare class GetCalendarDatesResponse extends SpeakeasyBase {
    calendarDatePage?: shared.CalendarDatePage;
    contentType: string;
    statusCode: number;
}
