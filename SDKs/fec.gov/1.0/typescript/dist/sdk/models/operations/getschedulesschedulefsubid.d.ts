import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSchedulesScheduleFSubIdPathParams extends SpeakeasyBase {
    subId: string;
}
export declare class GetSchedulesScheduleFSubIdQueryParams extends SpeakeasyBase {
    apiKey: string;
    page?: number;
    perPage?: number;
}
export declare class GetSchedulesScheduleFSubIdDefaultApplicationJsonResults extends SpeakeasyBase {
    actionCode?: string;
    actionCodeFull?: string;
    aggregateGeneralElectionExpenditure?: string;
    backReferenceScheduleName?: string;
    backReferenceTransactionId?: string;
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
    catologCode?: string;
    catologCodeFull?: string;
    committee?: shared.CommitteeHistory;
    committeeDesignatedCoordinatedExpenditureIndicator?: string;
    committeeId?: string;
    committeeName?: string;
    conduitCommitteeCity?: string;
    conduitCommitteeId?: string;
    conduitCommitteeName?: string;
    conduitCommitteeState?: string;
    conduitCommitteeStreet1?: string;
    conduitCommitteeStreet2?: string;
    conduitCommitteeZip?: number;
    designatedCommitteeId?: string;
    designatedCommitteeName?: string;
    electionCycle?: number;
    entityType?: string;
    entityTypeDesc?: string;
    expenditureAmount?: number;
    expenditureDate?: Date;
    expenditurePurposeFull?: string;
    expenditureType?: string;
    expenditureTypeFull?: string;
    fileNumber?: number;
    filingForm?: string;
    imageNumber?: string;
    lineNumber?: string;
    linkId?: number;
    loadDate?: Date;
    memoCode?: string;
    memoCodeFull?: string;
    memoText?: string;
    originalSubId?: number;
    payeeFirstName?: string;
    payeeLastName?: string;
    payeeMiddleName?: string;
    payeeName?: string;
    pdfUrl?: string;
    reportType?: string;
    reportYear?: number;
    scheduleType?: string;
    scheduleTypeFull?: string;
    subId?: string;
    subordinateCommittee?: shared.CommitteeHistory;
    subordinateCommitteeId?: string;
    transactionId?: string;
    unlimitedSpendingFlag?: string;
    unlimitedSpendingFlagFull?: string;
}
export declare class GetSchedulesScheduleFSubIdDefaultApplicationJson extends SpeakeasyBase {
    pagination?: shared.OffsetInfo;
    results?: GetSchedulesScheduleFSubIdDefaultApplicationJsonResults[];
}
export declare class GetSchedulesScheduleFSubIdRequest extends SpeakeasyBase {
    pathParams: GetSchedulesScheduleFSubIdPathParams;
    queryParams: GetSchedulesScheduleFSubIdQueryParams;
}
export declare class GetSchedulesScheduleFSubIdResponse extends SpeakeasyBase {
    contentType: string;
    getSchedulesScheduleFSubIdDefaultApplicationJsonObject?: GetSchedulesScheduleFSubIdDefaultApplicationJson;
    statusCode: number;
}
