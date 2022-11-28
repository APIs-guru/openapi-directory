import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSchedulesScheduleFQueryParams extends SpeakeasyBase {
    apiKey: string;
    candidateId?: string[];
    committeeId?: string[];
    cycle?: number[];
    imageNumber?: string[];
    lineNumber?: string;
    maxAmount?: string;
    maxDate?: Date;
    maxImageNumber?: string;
    minAmount?: string;
    minDate?: Date;
    minImageNumber?: string;
    page?: number;
    payeeName?: string[];
    perPage?: number;
    sort?: string;
    sortHideNull?: boolean;
    sortNullOnly?: boolean;
    sortNullsLast?: boolean;
}
export declare class GetSchedulesScheduleFDefaultApplicationJsonResults extends SpeakeasyBase {
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
export declare class GetSchedulesScheduleFDefaultApplicationJson extends SpeakeasyBase {
    pagination?: shared.OffsetInfo;
    results?: GetSchedulesScheduleFDefaultApplicationJsonResults[];
}
export declare class GetSchedulesScheduleFRequest extends SpeakeasyBase {
    queryParams: GetSchedulesScheduleFQueryParams;
}
export declare class GetSchedulesScheduleFResponse extends SpeakeasyBase {
    contentType: string;
    getSchedulesScheduleFDefaultApplicationJsonObject?: GetSchedulesScheduleFDefaultApplicationJson;
    statusCode: number;
}
