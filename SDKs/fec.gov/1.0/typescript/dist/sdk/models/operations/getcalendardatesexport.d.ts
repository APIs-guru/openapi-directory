import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetCalendarDatesExportRendererEnum {
    Ics = "ics",
    Csv = "csv"
}
export declare class GetCalendarDatesExportQueryParams extends SpeakeasyBase {
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
    renderer?: GetCalendarDatesExportRendererEnum;
    sort?: string;
    sortHideNull?: boolean;
    sortNullOnly?: boolean;
    sortNullsLast?: boolean;
    summary?: string[];
}
export declare class GetCalendarDatesExportRequest extends SpeakeasyBase {
    queryParams: GetCalendarDatesExportQueryParams;
}
export declare class GetCalendarDatesExportResponse extends SpeakeasyBase {
    calendarDatePage?: shared.CalendarDatePage;
    contentType: string;
    statusCode: number;
}
