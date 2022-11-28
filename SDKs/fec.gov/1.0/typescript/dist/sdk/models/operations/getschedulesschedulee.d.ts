import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetSchedulesScheduleECandidateOfficeEnum {
    Unknown = "",
    H = "H",
    S = "S",
    P = "P"
}
export declare enum GetSchedulesScheduleESupportOpposeIndicatorEnum {
    S = "S",
    O = "O"
}
export declare class GetSchedulesScheduleEQueryParams extends SpeakeasyBase {
    apiKey: string;
    candidateId?: string[];
    candidateOffice?: GetSchedulesScheduleECandidateOfficeEnum[];
    candidateOfficeDistrict?: string[];
    candidateOfficeState?: string[];
    candidateParty?: string[];
    committeeId?: string[];
    cycle?: number[];
    filingForm?: string[];
    imageNumber?: string[];
    isNotice?: boolean[];
    lastExpenditureAmount?: number;
    lastExpenditureDate?: Date;
    lastIndex?: number;
    lastOfficeTotalYtd?: number;
    lastSupportOpposeIndicator?: string;
    lineNumber?: string;
    maxAmount?: string;
    maxDate?: Date;
    maxDisseminationDate?: Date;
    maxFilingDate?: Date;
    maxImageNumber?: string;
    minAmount?: string;
    minDate?: Date;
    minDisseminationDate?: Date;
    minFilingDate?: Date;
    minImageNumber?: string;
    mostRecent?: boolean;
    payeeName?: string[];
    perPage?: number;
    sort?: string;
    sortHideNull?: boolean;
    sortNullOnly?: boolean;
    sortNullsLast?: boolean;
    supportOpposeIndicator?: GetSchedulesScheduleESupportOpposeIndicatorEnum[];
}
export declare class GetSchedulesScheduleERequest extends SpeakeasyBase {
    queryParams: GetSchedulesScheduleEQueryParams;
}
export declare class GetSchedulesScheduleEResponse extends SpeakeasyBase {
    contentType: string;
    scheduleEPage?: shared.ScheduleEPage;
    statusCode: number;
}
