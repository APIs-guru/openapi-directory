import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSchedulesScheduleAByStateTotalsQueryParams extends SpeakeasyBase {
    apiKey: string;
    committeeType?: string[];
    cycle?: number[];
    page?: number;
    perPage?: number;
    sort?: string;
    sortHideNull?: boolean;
    sortNullOnly?: boolean;
    sortNullsLast?: boolean;
    state?: string[];
}
export declare class GetSchedulesScheduleAByStateTotalsRequest extends SpeakeasyBase {
    queryParams: GetSchedulesScheduleAByStateTotalsQueryParams;
}
export declare class GetSchedulesScheduleAByStateTotalsResponse extends SpeakeasyBase {
    contentType: string;
    scheduleAByStateRecipientTotalsPage?: shared.ScheduleAByStateRecipientTotalsPage;
    statusCode: number;
}
