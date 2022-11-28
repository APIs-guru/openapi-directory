import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetSchedulesScheduleEEfileCandidateOfficeEnum {
    Unknown = "",
    H = "H",
    S = "S",
    P = "P"
}
export declare enum GetSchedulesScheduleEEfileSupportOpposeIndicatorEnum {
    S = "S",
    O = "O"
}
export declare class GetSchedulesScheduleEEfileQueryParams extends SpeakeasyBase {
    apiKey: string;
    candidateId?: string[];
    candidateOffice?: GetSchedulesScheduleEEfileCandidateOfficeEnum;
    candidateOfficeDistrict?: string[];
    candidateOfficeState?: string[];
    candidateParty?: string[];
    candidateSearch?: string[];
    committeeId?: string[];
    filingForm?: string[];
    imageNumber?: string[];
    isNotice?: boolean;
    maxDisseminationDate?: Date;
    maxExpenditureAmount?: number;
    maxExpenditureDate?: Date;
    maxFiledDate?: Date;
    minDisseminationDate?: Date;
    minExpenditureAmount?: number;
    minExpenditureDate?: Date;
    minFiledDate?: Date;
    mostRecent?: boolean;
    page?: number;
    payeeName?: string[];
    perPage?: number;
    sort?: string;
    sortHideNull?: boolean;
    sortNullOnly?: boolean;
    sortNullsLast?: boolean;
    spenderName?: string[];
    supportOpposeIndicator?: GetSchedulesScheduleEEfileSupportOpposeIndicatorEnum[];
}
export declare class GetSchedulesScheduleEEfileRequest extends SpeakeasyBase {
    queryParams: GetSchedulesScheduleEEfileQueryParams;
}
export declare class GetSchedulesScheduleEEfileResponse extends SpeakeasyBase {
    contentType: string;
    scheduleEEfilePage?: shared.ScheduleEEfilePage;
    statusCode: number;
}
