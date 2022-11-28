import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSchedulesScheduleAByStateQueryParams extends SpeakeasyBase {
    apiKey: string;
    committeeId?: string[];
    cycle?: number[];
    hideNull?: boolean;
    page?: number;
    perPage?: number;
    sort?: string;
    sortHideNull?: boolean;
    sortNullOnly?: boolean;
    sortNullsLast?: boolean;
    state?: string[];
}
export declare class GetSchedulesScheduleAByStateRequest extends SpeakeasyBase {
    queryParams: GetSchedulesScheduleAByStateQueryParams;
}
export declare class GetSchedulesScheduleAByStateResponse extends SpeakeasyBase {
    contentType: string;
    scheduleAByStatePage?: shared.ScheduleAByStatePage;
    statusCode: number;
}
