import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class SearchFeccandidatesQueryParams extends SpeakeasyBase {
    changedateFrom?: Date;
    changedateTo?: Date;
    createdateFrom?: Date;
    createdateTo?: Date;
    description?: string;
    filesuffix?: string;
    fromdate?: Date;
    group?: string;
    max?: number;
    maxlatitude?: number;
    maxlongitude?: number;
    minlatitude?: number;
    minlongitude?: number;
    name?: string;
    searchDbFeccandidatesBeginningCash?: number;
    searchDbFeccandidatesCandidateLoanRepayments?: number;
    searchDbFeccandidatesCommitteeRefunds?: number;
    searchDbFeccandidatesContributionsFromCandidate?: number;
    searchDbFeccandidatesContributionsFromOtherCommittees?: number;
    searchDbFeccandidatesContributionsFromPartyCommittees?: number;
    searchDbFeccandidatesCoverageEndDate?: string;
    searchDbFeccandidatesDebtsOwedBy?: number;
    searchDbFeccandidatesDistrict?: string;
    searchDbFeccandidatesEndingCash?: number;
    searchDbFeccandidatesGender?: string;
    searchDbFeccandidatesIndividualRefunds?: number;
    searchDbFeccandidatesLoansFromCandidates?: number;
    searchDbFeccandidatesName?: string;
    searchDbFeccandidatesOtherLoanRepayments?: number;
    searchDbFeccandidatesOtherLoans?: number;
    searchDbFeccandidatesParty?: string;
    searchDbFeccandidatesState?: string;
    searchDbFeccandidatesTotalDisbursements?: number;
    searchDbFeccandidatesTotalIndivualContributions?: number;
    searchDbFeccandidatesTotalReceipts?: number;
    searchDbFeccandidatesTransfersFromCommittees?: number;
    searchDbFeccandidatesTransfersToCommittees?: number;
    skip?: number;
    text?: string;
    todate?: Date;
}
export declare class SearchFeccandidatesRequest extends SpeakeasyBase {
    queryParams: SearchFeccandidatesQueryParams;
}
export declare class SearchFeccandidatesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
