import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSchedulesScheduleABySizeQueryParams extends SpeakeasyBase {
    apiKey: string;
    committeeId?: string[];
    cycle?: number[];
    page?: number;
    perPage?: number;
    size?: number[];
    sort?: string;
    sortHideNull?: boolean;
    sortNullOnly?: boolean;
    sortNullsLast?: boolean;
}
export declare class GetSchedulesScheduleABySizeRequest extends SpeakeasyBase {
    queryParams: GetSchedulesScheduleABySizeQueryParams;
}
export declare class GetSchedulesScheduleABySizeResponse extends SpeakeasyBase {
    contentType: string;
    scheduleABySizePage?: shared.ScheduleABySizePage;
    statusCode: number;
}
