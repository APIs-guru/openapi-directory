import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCommitteeCommitteeIdFilingsPathParams extends SpeakeasyBase {
    committeeId: string;
}
export declare enum GetCommitteeCommitteeIdFilingsAmendmentIndicatorEnum {
    Unknown = "",
    N = "N",
    A = "A",
    T = "T",
    C = "C",
    M = "M",
    S = "S"
}
export declare enum GetCommitteeCommitteeIdFilingsFilerTypeEnum {
    EFile = "e-file",
    Paper = "paper"
}
export declare enum GetCommitteeCommitteeIdFilingsOfficeEnum {
    Unknown = "",
    H = "H",
    S = "S",
    P = "P"
}
export declare class GetCommitteeCommitteeIdFilingsQueryParams extends SpeakeasyBase {
    amendmentIndicator?: GetCommitteeCommitteeIdFilingsAmendmentIndicatorEnum[];
    apiKey: string;
    beginningImageNumber?: string[];
    committeeType?: string;
    cycle?: number[];
    district?: string[];
    documentType?: string[];
    fileNumber?: number[];
    filerType?: GetCommitteeCommitteeIdFilingsFilerTypeEnum;
    formCategory?: string[];
    formType?: string[];
    isAmended?: boolean;
    maxReceiptDate?: Date;
    minReceiptDate?: Date;
    mostRecent?: boolean;
    office?: GetCommitteeCommitteeIdFilingsOfficeEnum[];
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
export declare class GetCommitteeCommitteeIdFilingsRequest extends SpeakeasyBase {
    pathParams: GetCommitteeCommitteeIdFilingsPathParams;
    queryParams: GetCommitteeCommitteeIdFilingsQueryParams;
}
export declare class GetCommitteeCommitteeIdFilingsResponse extends SpeakeasyBase {
    contentType: string;
    filingsPage?: shared.FilingsPage;
    statusCode: number;
}
