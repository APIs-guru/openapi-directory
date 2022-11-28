import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSchedulesScheduleABySizeByCandidateQueryParams extends SpeakeasyBase {
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
export declare class GetSchedulesScheduleABySizeByCandidateRequest extends SpeakeasyBase {
    queryParams: GetSchedulesScheduleABySizeByCandidateQueryParams;
}
export declare class GetSchedulesScheduleABySizeByCandidateResponse extends SpeakeasyBase {
    contentType: string;
    scheduleABySizeCandidatePage?: shared.ScheduleABySizeCandidatePage;
    statusCode: number;
}
