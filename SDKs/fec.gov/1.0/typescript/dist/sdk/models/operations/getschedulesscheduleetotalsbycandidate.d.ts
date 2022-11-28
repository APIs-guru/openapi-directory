import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSchedulesScheduleETotalsByCandidateQueryParams extends SpeakeasyBase {
    apiKey: string;
    candidateId?: string[];
    cycle?: number[];
    electionFull?: boolean;
    page?: number;
    perPage?: number;
    sort?: string;
    sortHideNull?: boolean;
    sortNullOnly?: boolean;
    sortNullsLast?: boolean;
}
export declare class GetSchedulesScheduleETotalsByCandidateRequest extends SpeakeasyBase {
    queryParams: GetSchedulesScheduleETotalsByCandidateQueryParams;
}
export declare class GetSchedulesScheduleETotalsByCandidateResponse extends SpeakeasyBase {
    contentType: string;
    ieTotalsByCandidatePage?: shared.IeTotalsByCandidatePage;
    statusCode: number;
}
