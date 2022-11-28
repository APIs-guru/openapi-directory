import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetFilingsAmendmentIndicatorEnum {
    Unknown = "",
    N = "N",
    A = "A",
    T = "T",
    C = "C",
    M = "M",
    S = "S"
}
export declare enum GetFilingsFilerTypeEnum {
    EFile = "e-file",
    Paper = "paper"
}
export declare enum GetFilingsOfficeEnum {
    Unknown = "",
    H = "H",
    S = "S",
    P = "P"
}
export declare class GetFilingsQueryParams extends SpeakeasyBase {
    amendmentIndicator?: GetFilingsAmendmentIndicatorEnum[];
    apiKey: string;
    beginningImageNumber?: string[];
    candidateId?: string[];
    committeeId?: string[];
    committeeType?: string;
    cycle?: number[];
    district?: string[];
    documentType?: string[];
    fileNumber?: number[];
    filerType?: GetFilingsFilerTypeEnum;
    formCategory?: string[];
    formType?: string[];
    isAmended?: boolean;
    maxReceiptDate?: Date;
    minReceiptDate?: Date;
    mostRecent?: boolean;
    office?: GetFilingsOfficeEnum[];
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
export declare class GetFilingsRequest extends SpeakeasyBase {
    queryParams: GetFilingsQueryParams;
}
export declare class GetFilingsResponse extends SpeakeasyBase {
    contentType: string;
    filingsPage?: shared.FilingsPage;
    statusCode: number;
}
