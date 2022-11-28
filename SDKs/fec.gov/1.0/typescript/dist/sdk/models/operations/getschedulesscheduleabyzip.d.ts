import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSchedulesScheduleAByZipQueryParams extends SpeakeasyBase {
    apiKey: string;
    committeeId?: string[];
    cycle?: number[];
    page?: number;
    perPage?: number;
    sort?: string;
    sortHideNull?: boolean;
    sortNullOnly?: boolean;
    sortNullsLast?: boolean;
    state?: string[];
    zip?: string[];
}
export declare class GetSchedulesScheduleAByZipRequest extends SpeakeasyBase {
    queryParams: GetSchedulesScheduleAByZipQueryParams;
}
export declare class GetSchedulesScheduleAByZipResponse extends SpeakeasyBase {
    contentType: string;
    scheduleAByZipPage?: shared.ScheduleAByZipPage;
    statusCode: number;
}
