import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetReportsEntityTypeEntityTypeEnum {
    Presidential = "presidential",
    PacParty = "pac-party",
    HouseSenate = "house-senate",
    IeOnly = "ie-only"
}
export declare class GetReportsEntityTypePathParams extends SpeakeasyBase {
    entityType: GetReportsEntityTypeEntityTypeEnum;
}
export declare enum GetReportsEntityTypeAmendmentIndicatorEnum {
    Unknown = "",
    N = "N",
    A = "A",
    T = "T",
    C = "C",
    M = "M",
    S = "S"
}
export declare enum GetReportsEntityTypeFilerTypeEnum {
    EFile = "e-file",
    Paper = "paper"
}
export declare class GetReportsEntityTypeQueryParams extends SpeakeasyBase {
    amendmentIndicator?: GetReportsEntityTypeAmendmentIndicatorEnum[];
    apiKey: string;
    beginningImageNumber?: string[];
    candidateId?: string;
    committeeId?: string[];
    cycle?: number[];
    filerType?: GetReportsEntityTypeFilerTypeEnum;
    isAmended?: boolean;
    maxCashOnHandEndPeriodAmount?: string;
    maxDebtsOwedExpenditures?: string;
    maxDisbursementsAmount?: string;
    maxIndependentExpenditures?: string;
    maxPartyCoordinatedExpenditures?: string;
    maxReceiptDate?: Date;
    maxReceiptsAmount?: string;
    maxTotalContributions?: string;
    minCashOnHandEndPeriodAmount?: string;
    minDebtsOwedAmount?: string;
    minDisbursementsAmount?: string;
    minIndependentExpenditures?: string;
    minPartyCoordinatedExpenditures?: string;
    minReceiptDate?: Date;
    minReceiptsAmount?: string;
    minTotalContributions?: string;
    mostRecent?: boolean;
    page?: number;
    perPage?: number;
    reportType?: string[];
    sort?: string[];
    sortHideNull?: boolean;
    sortNullOnly?: boolean;
    sortNullsLast?: boolean;
    type?: string[];
    year?: number[];
}
export declare class GetReportsEntityTypeRequest extends SpeakeasyBase {
    pathParams: GetReportsEntityTypePathParams;
    queryParams: GetReportsEntityTypeQueryParams;
}
export declare class GetReportsEntityTypeResponse extends SpeakeasyBase {
    committeeReportsPage?: shared.CommitteeReportsPage;
    contentType: string;
    statusCode: number;
}
