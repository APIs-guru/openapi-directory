import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetTotalsEntityTypeEntityTypeEnum {
    Presidential = "presidential",
    Pac = "pac",
    Party = "party",
    PacParty = "pac-party",
    HouseSenate = "house-senate",
    IeOnly = "ie-only"
}
export declare class GetTotalsEntityTypePathParams extends SpeakeasyBase {
    entityType: GetTotalsEntityTypeEntityTypeEnum;
}
export declare enum GetTotalsEntityTypeFilingFrequencyEnum {
    Unknown = "",
    A = "A",
    M = "M",
    N = "N",
    Q = "Q",
    T = "T",
    W = "W",
    MinusA = "-A",
    MinusT = "-T"
}
export declare enum GetTotalsEntityTypeOrganizationTypeEnum {
    Unknown = "",
    C = "C",
    L = "L",
    M = "M",
    T = "T",
    V = "V",
    W = "W"
}
export declare class GetTotalsEntityTypeQueryParams extends SpeakeasyBase {
    apiKey: string;
    committeeDesignation?: string[];
    committeeId?: string;
    committeeState?: string[];
    committeeType?: string[];
    cycle?: number[];
    filingFrequency?: GetTotalsEntityTypeFilingFrequencyEnum[];
    maxDisbursements?: string;
    maxLastCashOnHandEndPeriod?: string;
    maxLastDebtsOwedByCommittee?: string;
    maxReceipts?: string;
    minDisbursements?: string;
    minLastCashOnHandEndPeriod?: string;
    minLastDebtsOwedByCommittee?: string;
    minReceipts?: string;
    organizationType?: GetTotalsEntityTypeOrganizationTypeEnum[];
    page?: number;
    perPage?: number;
    sort?: string;
    sortHideNull?: boolean;
    sortNullOnly?: boolean;
    sortNullsLast?: boolean;
    sponsorCandidateId?: string[];
    treasurerName?: string[];
}
export declare class GetTotalsEntityTypeRequest extends SpeakeasyBase {
    pathParams: GetTotalsEntityTypePathParams;
    queryParams: GetTotalsEntityTypeQueryParams;
}
export declare class GetTotalsEntityTypeResponse extends SpeakeasyBase {
    committeeTotalsPage?: shared.CommitteeTotalsPage;
    contentType: string;
    statusCode: number;
}
