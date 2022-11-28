import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetSchedulesScheduleAContributorTypeEnum {
    Individual = "individual",
    Committee = "committee"
}
export declare enum GetSchedulesScheduleARecipientCommitteeDesignationEnum {
    Unknown = "",
    A = "A",
    J = "J",
    P = "P",
    U = "U",
    B = "B",
    D = "D"
}
export declare enum GetSchedulesScheduleARecipientCommitteeOrgTypeEnum {
    Unknown = "",
    C = "C",
    L = "L",
    M = "M",
    T = "T",
    V = "V",
    W = "W"
}
export declare enum GetSchedulesScheduleARecipientCommitteeTypeEnum {
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
export declare class GetSchedulesScheduleAQueryParams extends SpeakeasyBase {
    apiKey: string;
    committeeId?: string[];
    contributorCity?: string[];
    contributorEmployer?: string[];
    contributorId?: string[];
    contributorName?: string[];
    contributorOccupation?: string[];
    contributorState?: string[];
    contributorType?: GetSchedulesScheduleAContributorTypeEnum[];
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
    recipientCommitteeDesignation?: GetSchedulesScheduleARecipientCommitteeDesignationEnum[];
    recipientCommitteeOrgType?: GetSchedulesScheduleARecipientCommitteeOrgTypeEnum[];
    recipientCommitteeType?: GetSchedulesScheduleARecipientCommitteeTypeEnum[];
    sort?: string;
    sortHideNull?: boolean;
    sortNullOnly?: boolean;
    twoYearTransactionPeriod?: number[];
}
export declare class GetSchedulesScheduleARequest extends SpeakeasyBase {
    queryParams: GetSchedulesScheduleAQueryParams;
}
export declare class GetSchedulesScheduleAResponse extends SpeakeasyBase {
    contentType: string;
    scheduleAPage?: shared.ScheduleAPage;
    statusCode: number;
}
