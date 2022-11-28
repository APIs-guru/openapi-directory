import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCandidateCandidateIdFilingsPathParams extends SpeakeasyBase {
    candidateId: string;
}
export declare enum GetCandidateCandidateIdFilingsAmendmentIndicatorEnum {
    Unknown = "",
    N = "N",
    A = "A",
    T = "T",
    C = "C",
    M = "M",
    S = "S"
}
export declare enum GetCandidateCandidateIdFilingsFilerTypeEnum {
    EFile = "e-file",
    Paper = "paper"
}
export declare enum GetCandidateCandidateIdFilingsOfficeEnum {
    Unknown = "",
    H = "H",
    S = "S",
    P = "P"
}
export declare class GetCandidateCandidateIdFilingsQueryParams extends SpeakeasyBase {
    amendmentIndicator?: GetCandidateCandidateIdFilingsAmendmentIndicatorEnum[];
    apiKey: string;
    beginningImageNumber?: string[];
    committeeType?: string;
    cycle?: number[];
    district?: string[];
    documentType?: string[];
    fileNumber?: number[];
    filerType?: GetCandidateCandidateIdFilingsFilerTypeEnum;
    formCategory?: string[];
    formType?: string[];
    isAmended?: boolean;
    maxReceiptDate?: Date;
    minReceiptDate?: Date;
    mostRecent?: boolean;
    office?: GetCandidateCandidateIdFilingsOfficeEnum[];
    page?: number;
    party?: string[];
    perPage?: number;
    primaryGeneralIndicator?: string[];
    reportType?: string[];
    reportYear?: number[];
    requestType?: string[];
    sort?: string[];
    sortHideNull?: boolean;
    sortNullOnly?: boolean;
    sortNullsLast?: boolean;
    state?: string[];
}
export declare class GetCandidateCandidateIdFilingsRequest extends SpeakeasyBase {
    pathParams: GetCandidateCandidateIdFilingsPathParams;
    queryParams: GetCandidateCandidateIdFilingsQueryParams;
}
export declare class GetCandidateCandidateIdFilingsResponse extends SpeakeasyBase {
    contentType: string;
    filingsPage?: shared.FilingsPage;
    statusCode: number;
}
