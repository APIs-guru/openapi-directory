import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetCandidatesTotalsByOfficeByPartyOfficeEnum {
    Unknown = "",
    H = "H",
    S = "S",
    P = "P"
}
export declare class GetCandidatesTotalsByOfficeByPartyQueryParams extends SpeakeasyBase {
    apiKey: string;
    electionYear?: number[];
    isActiveCandidate?: boolean;
    office?: GetCandidatesTotalsByOfficeByPartyOfficeEnum;
    page?: number;
    perPage?: number;
    sort?: string;
    sortHideNull?: boolean;
    sortNullOnly?: boolean;
    sortNullsLast?: boolean;
}
export declare class GetCandidatesTotalsByOfficeByPartyRequest extends SpeakeasyBase {
    queryParams: GetCandidatesTotalsByOfficeByPartyQueryParams;
}
export declare class GetCandidatesTotalsByOfficeByPartyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    totalByOfficeByPartyPage?: shared.TotalByOfficeByPartyPage;
}
