import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSchedulesScheduleAByEmployerQueryParams extends SpeakeasyBase {
    apiKey: string;
    committeeId?: string[];
    cycle?: number[];
    employer?: string[];
    page?: number;
    perPage?: number;
    sort?: string;
    sortHideNull?: boolean;
    sortNullOnly?: boolean;
    sortNullsLast?: boolean;
}
export declare class GetSchedulesScheduleAByEmployerRequest extends SpeakeasyBase {
    queryParams: GetSchedulesScheduleAByEmployerQueryParams;
}
export declare class GetSchedulesScheduleAByEmployerResponse extends SpeakeasyBase {
    contentType: string;
    scheduleAByEmployerPage?: shared.ScheduleAByEmployerPage;
    statusCode: number;
}
