import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSchedulesScheduleDQueryParams extends SpeakeasyBase {
    apiKey: string;
    candidateId?: string[];
    committeeId?: string[];
    creditorDebtorName?: string[];
    imageNumber?: string[];
    maxAmountIncurred?: number;
    maxAmountOutstandingBeginning?: number;
    maxAmountOutstandingClose?: number;
    maxDate?: Date;
    maxImageNumber?: string;
    maxPaymentPeriod?: number;
    minAmountIncurred?: number;
    minAmountOutstandingBeginning?: number;
    minAmountOutstandingClose?: number;
    minDate?: Date;
    minImageNumber?: string;
    minPaymentPeriod?: number;
    natureOfDebt?: string;
    page?: number;
    perPage?: number;
    sort?: string;
    sortHideNull?: boolean;
    sortNullOnly?: boolean;
    sortNullsLast?: boolean;
}
export declare class GetSchedulesScheduleDDefaultApplicationJsonResults extends SpeakeasyBase {
    actionCode?: string;
    actionCodeFull?: string;
    amountIncurredPeriod?: number;
    candidateFirstName?: string;
    candidateId?: string;
    candidateLastName?: string;
    candidateOffice?: string;
    candidateOfficeDistrict?: string;
    candidateOfficeState?: string;
    candidateOfficeStateFull?: string;
    canidateName?: string;
    committee?: shared.CommitteeHistory;
    committeeId?: string;
    committeeName?: string;
    conduitCommitteeCity?: string;
    conduitCommitteeId?: string;
    conduitCommitteeName?: string;
    conduitCommitteeState?: string;
    conduitCommitteeStreet1?: string;
    conduitCommitteeStreet2?: string;
    conduitCommitteeZip?: number;
    creditorDebtorCity?: string;
    creditorDebtorFirstName?: string;
    creditorDebtorId?: string;
    creditorDebtorLastName?: string;
    creditorDebtorMiddleName?: string;
    creditorDebtorName?: string;
    creditorDebtorPrefix?: string;
    creditorDebtorState?: string;
    creditorDebtorStreet1?: string;
    creditorDebtorStreet2?: string;
    creditorDebtorSuffix?: string;
    electionCycle?: number;
    entityType?: string;
    fileNumber?: number;
    filingForm?: string;
    imageNumber?: string;
    lineNumber?: string;
    linkId?: number;
    loadDate?: Date;
    natureOfDebt?: string;
    originalSubId?: number;
    outstandingBalanceBeginningOfPeriod?: number;
    outstandingBalanceCloseOfPeriod?: number;
    paymentPeriod?: number;
    pdfUrl?: string;
    reportType?: string;
    reportYear?: number;
    scheduleType?: string;
    scheduleTypeFull?: string;
    subId?: string;
    transactionId?: string;
}
export declare class GetSchedulesScheduleDDefaultApplicationJson extends SpeakeasyBase {
    pagination?: shared.OffsetInfo;
    results?: GetSchedulesScheduleDDefaultApplicationJsonResults[];
}
export declare class GetSchedulesScheduleDRequest extends SpeakeasyBase {
    queryParams: GetSchedulesScheduleDQueryParams;
}
export declare class GetSchedulesScheduleDResponse extends SpeakeasyBase {
    contentType: string;
    getSchedulesScheduleDDefaultApplicationJsonObject?: GetSchedulesScheduleDDefaultApplicationJson;
    statusCode: number;
}
