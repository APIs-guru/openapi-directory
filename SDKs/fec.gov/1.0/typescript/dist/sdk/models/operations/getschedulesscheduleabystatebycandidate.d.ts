import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSchedulesScheduleAByStateByCandidateQueryParams extends SpeakeasyBase {
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
export declare class GetSchedulesScheduleAByStateByCandidateRequest extends SpeakeasyBase {
    queryParams: GetSchedulesScheduleAByStateByCandidateQueryParams;
}
export declare class GetSchedulesScheduleAByStateByCandidateResponse extends SpeakeasyBase {
    contentType: string;
    scheduleAByStateCandidatePage?: shared.ScheduleAByStateCandidatePage;
    statusCode: number;
}
