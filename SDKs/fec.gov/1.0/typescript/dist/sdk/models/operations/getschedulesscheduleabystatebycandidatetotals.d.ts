import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSchedulesScheduleAByStateByCandidateTotalsQueryParams extends SpeakeasyBase {
    apiKey: string;
    candidateId: string[];
    cycle: number[];
    electionFull?: boolean;
    page?: number;
    perPage?: number;
    sort?: string;
    sortHideNull?: boolean;
    sortNullOnly?: boolean;
    sortNullsLast?: boolean;
}
export declare class GetSchedulesScheduleAByStateByCandidateTotalsRequest extends SpeakeasyBase {
    queryParams: GetSchedulesScheduleAByStateByCandidateTotalsQueryParams;
}
export declare class GetSchedulesScheduleAByStateByCandidateTotalsResponse extends SpeakeasyBase {
    contentType: string;
    scheduleAByStateCandidatePage?: shared.ScheduleAByStateCandidatePage;
    statusCode: number;
}
