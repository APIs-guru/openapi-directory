import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSchedulesScheduleAByOccupationQueryParams extends SpeakeasyBase {
    apiKey: string;
    committeeId?: string[];
    cycle?: number[];
    occupation?: string[];
    page?: number;
    perPage?: number;
    sort?: string;
    sortHideNull?: boolean;
    sortNullOnly?: boolean;
    sortNullsLast?: boolean;
}
export declare class GetSchedulesScheduleAByOccupationRequest extends SpeakeasyBase {
    queryParams: GetSchedulesScheduleAByOccupationQueryParams;
}
export declare class GetSchedulesScheduleAByOccupationResponse extends SpeakeasyBase {
    contentType: string;
    scheduleAByOccupationPage?: shared.ScheduleAByOccupationPage;
    statusCode: number;
}
