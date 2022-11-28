import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSchedulesScheduleASubIdPathParams extends SpeakeasyBase {
    subId: string;
}
export declare enum GetSchedulesScheduleASubIdContributorTypeEnum {
    Individual = "individual",
    Committee = "committee"
}
export declare enum GetSchedulesScheduleASubIdRecipientCommitteeDesignationEnum {
    Unknown = "",
    A = "A",
    J = "J",
    P = "P",
    U = "U",
    B = "B",
    D = "D"
}
export declare enum GetSchedulesScheduleASubIdRecipientCommitteeOrgTypeEnum {
    Unknown = "",
    C = "C",
    L = "L",
    M = "M",
    T = "T",
    V = "V",
    W = "W"
}
export declare enum GetSchedulesScheduleASubIdRecipientCommitteeTypeEnum {
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
export declare class GetSchedulesScheduleASubIdQueryParams extends SpeakeasyBase {
    apiKey: string;
    committeeId?: string[];
    contributorCity?: string[];
    contributorEmployer?: string[];
    contributorId?: string[];
    contributorName?: string[];
    contributorOccupation?: string[];
    contributorState?: string[];
    contributorType?: GetSchedulesScheduleASubIdContributorTypeEnum[];
    contributorZip?: string[];
    imageNumber?: string[];
    isIndividual?: boolean;
    lastContributionReceiptAmount?: number;
    lastContributionReceiptDate?: Date;
    lastIndex?: number;
    lineNumber?: string;
    maxAmount?: string;
    maxDate?: Date;
    maxImageNumber?: string;
    maxLoadDate?: Date;
    minAmount?: string;
    minDate?: Date;
    minImageNumber?: string;
    minLoadDate?: Date;
    perPage?: number;
    recipientCommitteeDesignation?: GetSchedulesScheduleASubIdRecipientCommitteeDesignationEnum[];
    recipientCommitteeOrgType?: GetSchedulesScheduleASubIdRecipientCommitteeOrgTypeEnum[];
    recipientCommitteeType?: GetSchedulesScheduleASubIdRecipientCommitteeTypeEnum[];
    sort?: string;
    sortHideNull?: boolean;
    sortNullOnly?: boolean;
    twoYearTransactionPeriod?: number[];
}
export declare class GetSchedulesScheduleASubIdRequest extends SpeakeasyBase {
    pathParams: GetSchedulesScheduleASubIdPathParams;
    queryParams: GetSchedulesScheduleASubIdQueryParams;
}
export declare class GetSchedulesScheduleASubIdResponse extends SpeakeasyBase {
    contentType: string;
    scheduleAPage?: shared.ScheduleAPage;
    statusCode: number;
}
