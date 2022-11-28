import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetCandidatesTotalsByOfficeOfficeEnum {
    Unknown = "",
    H = "H",
    S = "S",
    P = "P"
}
export declare class GetCandidatesTotalsByOfficeQueryParams extends SpeakeasyBase {
    apiKey: string;
    electionYear?: number[];
    isActiveCandidate?: boolean;
    office?: GetCandidatesTotalsByOfficeOfficeEnum;
    page?: number;
    perPage?: number;
    sort?: string;
    sortHideNull?: boolean;
    sortNullOnly?: boolean;
    sortNullsLast?: boolean;
}
export declare class GetCandidatesTotalsByOfficeRequest extends SpeakeasyBase {
    queryParams: GetCandidatesTotalsByOfficeQueryParams;
}
export declare class GetCandidatesTotalsByOfficeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    totalByOfficePage?: shared.TotalByOfficePage;
}
