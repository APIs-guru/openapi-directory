import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSchedulesScheduleBSubIdPathParams extends SpeakeasyBase {
    subId: string;
}
export declare enum GetSchedulesScheduleBSubIdSpenderCommitteeDesignationEnum {
    Unknown = "",
    A = "A",
    J = "J",
    P = "P",
    U = "U",
    B = "B",
    D = "D"
}
export declare enum GetSchedulesScheduleBSubIdSpenderCommitteeOrgTypeEnum {
    Unknown = "",
    C = "C",
    L = "L",
    M = "M",
    T = "T",
    V = "V",
    W = "W"
}
export declare enum GetSchedulesScheduleBSubIdSpenderCommitteeTypeEnum {
    Unknown = "",
    C = "C",
    D = "D",
    E = "E",
    H = "H",
    I = "I",
    N = "N",
    O = "O",
    P = "P",
    Q = "Q",
    S = "S",
    U = "U",
    V = "V",
    W = "W",
    X = "X",
    Y = "Y",
    Z = "Z"
}
export declare class GetSchedulesScheduleBSubIdQueryParams extends SpeakeasyBase {
    apiKey: string;
    committeeId?: string[];
    disbursementDescription?: string[];
    disbursementPurposeCategory?: string[];
    imageNumber?: string[];
    lastDisbursementAmount?: number;
    lastDisbursementDate?: Date;
    lastIndex?: number;
    lineNumber?: string;
    maxAmount?: string;
    maxDate?: Date;
    maxImageNumber?: string;
    minAmount?: string;
    minDate?: Date;
    minImageNumber?: string;
    perPage?: number;
    recipientCity?: string[];
    recipientCommitteeId?: string[];
    recipientName?: string[];
    recipientState?: string[];
    sort?: string;
    sortHideNull?: boolean;
    sortNullOnly?: boolean;
    spenderCommitteeDesignation?: GetSchedulesScheduleBSubIdSpenderCommitteeDesignationEnum[];
    spenderCommitteeOrgType?: GetSchedulesScheduleBSubIdSpenderCommitteeOrgTypeEnum[];
    spenderCommitteeType?: GetSchedulesScheduleBSubIdSpenderCommitteeTypeEnum[];
    twoYearTransactionPeriod?: number[];
}
export declare class GetSchedulesScheduleBSubIdRequest extends SpeakeasyBase {
    pathParams: GetSchedulesScheduleBSubIdPathParams;
    queryParams: GetSchedulesScheduleBSubIdQueryParams;
}
export declare class GetSchedulesScheduleBSubIdResponse extends SpeakeasyBase {
    contentType: string;
    scheduleBPage?: shared.ScheduleBPage;
    statusCode: number;
}
