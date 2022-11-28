import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetSchedulesScheduleEByCandidateOfficeEnum {
    House = "house",
    Senate = "senate",
    President = "president"
}
export declare enum GetSchedulesScheduleEByCandidateSupportOpposeEnum {
    S = "S",
    O = "O"
}
export declare class GetSchedulesScheduleEByCandidateQueryParams extends SpeakeasyBase {
    apiKey: string;
    candidateId?: string[];
    committeeId?: string[];
    cycle?: number[];
    district?: string;
    electionFull?: boolean;
    office?: GetSchedulesScheduleEByCandidateOfficeEnum;
    page?: number;
    perPage?: number;
    sort?: string;
    sortHideNull?: boolean;
    sortNullOnly?: boolean;
    sortNullsLast?: boolean;
    state?: string;
    supportOppose?: GetSchedulesScheduleEByCandidateSupportOpposeEnum;
}
export declare class GetSchedulesScheduleEByCandidateRequest extends SpeakeasyBase {
    queryParams: GetSchedulesScheduleEByCandidateQueryParams;
}
export declare class GetSchedulesScheduleEByCandidateResponse extends SpeakeasyBase {
    contentType: string;
    scheduleEByCandidatePage?: shared.ScheduleEByCandidatePage;
    statusCode: number;
}
