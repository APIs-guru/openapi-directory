import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSchedulesScheduleCQueryParams extends SpeakeasyBase {
    apiKey: string;
    candidateName?: string[];
    committeeId?: string[];
    imageNumber?: string[];
    lastIndex?: number;
    lineNumber?: string;
    loanSourceName?: string[];
    maxAmount?: string;
    maxImageNumber?: string;
    maxIncurredDate?: Date;
    maxPaymentToDate?: number;
    minAmount?: string;
    minImageNumber?: string;
    minIncurredDate?: Date;
    minPaymentToDate?: number;
    page?: number;
    perPage?: number;
    sort?: string;
    sortHideNull?: boolean;
    sortNullOnly?: boolean;
    sortNullsLast?: boolean;
}
export declare class GetSchedulesScheduleCDefaultApplicationJsonResults extends SpeakeasyBase {
    actionCode?: string;
    actionCodeFull?: string;
    candidateFirstName?: string;
    candidateId?: string;
    candidateLastName?: string;
    candidateMiddleName?: string;
    candidateName?: string;
    candidateOffice?: string;
    candidateOfficeDistrict?: string;
    candidateOfficeFull?: string;
    candidateOfficeState?: string;
    candidateOfficeStateFull?: string;
    candidatePrefix?: string;
    candidateSuffix?: string;
    committee?: shared.CommitteeHistory;
    committeeId?: string;
    cycle?: number;
    dueDateTerms?: string;
    electionType?: string;
    electionTypeFull?: string;
    entityType?: string;
    entityTypeFull?: string;
    fecCommitteeId?: string;
    fecElectionTypeFull?: string;
    fecElectionTypeYear?: string;
    fileNumber?: number;
    filingForm?: string;
    imageNumber?: string;
    incurredDate?: Date;
    interestRateTerms?: string;
    lineNumber?: string;
    linkId?: number;
    loadDate?: Date;
    loanBalance?: number;
    loanSourceCity?: string;
    loanSourceFirstName?: string;
    loanSourceLastName?: string;
    loanSourceMiddleName?: string;
    loanSourceName?: string;
    loanSourcePrefix?: string;
    loanSourceState?: string;
    loanSourceStreet1?: string;
    loanSourceStreet2?: string;
    loanSourceSuffix?: string;
    loanSourceZip?: number;
    memoCode?: string;
    memoText?: string;
    originalLoanAmount?: number;
    originalSubId?: number;
    paymentToDate?: number;
    pdfUrl?: string;
    personallyFunded?: string;
    reportType?: string;
    reportYear?: number;
    scheduleALineNumber?: number;
    scheduleType?: string;
    scheduleTypeFull?: string;
    securedInd?: string;
    subId?: string;
    transactionId?: string;
}
export declare class GetSchedulesScheduleCDefaultApplicationJson extends SpeakeasyBase {
    pagination?: shared.OffsetInfo;
    results?: GetSchedulesScheduleCDefaultApplicationJsonResults[];
}
export declare class GetSchedulesScheduleCRequest extends SpeakeasyBase {
    queryParams: GetSchedulesScheduleCQueryParams;
}
export declare class GetSchedulesScheduleCResponse extends SpeakeasyBase {
    contentType: string;
    getSchedulesScheduleCDefaultApplicationJsonObject?: GetSchedulesScheduleCDefaultApplicationJson;
    statusCode: number;
}
