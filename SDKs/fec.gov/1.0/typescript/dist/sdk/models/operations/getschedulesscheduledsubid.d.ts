import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSchedulesScheduleDSubIdPathParams extends SpeakeasyBase {
    subId: string;
}
export declare class GetSchedulesScheduleDSubIdQueryParams extends SpeakeasyBase {
    apiKey: string;
    page?: number;
    perPage?: number;
    sort?: string;
    sortHideNull?: boolean;
    sortNullOnly?: boolean;
    sortNullsLast?: boolean;
}
export declare class GetSchedulesScheduleDSubIdDefaultApplicationJsonResults extends SpeakeasyBase {
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
export declare class GetSchedulesScheduleDSubIdDefaultApplicationJson extends SpeakeasyBase {
    pagination?: shared.OffsetInfo;
    results?: GetSchedulesScheduleDSubIdDefaultApplicationJsonResults[];
}
export declare class GetSchedulesScheduleDSubIdRequest extends SpeakeasyBase {
    pathParams: GetSchedulesScheduleDSubIdPathParams;
    queryParams: GetSchedulesScheduleDSubIdQueryParams;
}
export declare class GetSchedulesScheduleDSubIdResponse extends SpeakeasyBase {
    contentType: string;
    getSchedulesScheduleDSubIdDefaultApplicationJsonObject?: GetSchedulesScheduleDSubIdDefaultApplicationJson;
    statusCode: number;
}
