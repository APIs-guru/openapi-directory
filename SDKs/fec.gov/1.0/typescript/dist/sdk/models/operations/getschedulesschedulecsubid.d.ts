import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSchedulesScheduleCSubIdPathParams extends SpeakeasyBase {
    subId: string;
}
export declare class GetSchedulesScheduleCSubIdQueryParams extends SpeakeasyBase {
    apiKey: string;
    page?: number;
    perPage?: number;
    sort?: string;
    sortHideNull?: boolean;
    sortNullOnly?: boolean;
    sortNullsLast?: boolean;
}
export declare class GetSchedulesScheduleCSubIdDefaultApplicationJsonResults extends SpeakeasyBase {
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
export declare class GetSchedulesScheduleCSubIdDefaultApplicationJson extends SpeakeasyBase {
    pagination?: shared.OffsetInfo;
    results?: GetSchedulesScheduleCSubIdDefaultApplicationJsonResults[];
}
export declare class GetSchedulesScheduleCSubIdRequest extends SpeakeasyBase {
    pathParams: GetSchedulesScheduleCSubIdPathParams;
    queryParams: GetSchedulesScheduleCSubIdQueryParams;
}
export declare class GetSchedulesScheduleCSubIdResponse extends SpeakeasyBase {
    contentType: string;
    getSchedulesScheduleCSubIdDefaultApplicationJsonObject?: GetSchedulesScheduleCSubIdDefaultApplicationJson;
    statusCode: number;
}
