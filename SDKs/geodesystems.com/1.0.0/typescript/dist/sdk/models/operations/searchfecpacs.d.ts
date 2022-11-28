import { SpeakeasyBase } from "../../../internal/utils";
export declare class SearchFecPacsQueryParams extends SpeakeasyBase {
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
    searchDbFecPacsBeginningCash?: number;
    searchDbFecPacsCandidateLoanRepayments?: number;
    searchDbFecPacsCommittee?: string;
    searchDbFecPacsContributionsFromCandidate?: number;
    searchDbFecPacsContributionsFromIndividuals?: number;
    searchDbFecPacsContributionsFromOtherCommittees?: number;
    searchDbFecPacsContributionsToOtherCommittee?: number;
    searchDbFecPacsEndingCash?: number;
    searchDbFecPacsLoanRepayments?: number;
    searchDbFecPacsLoansFromCandidate?: number;
    searchDbFecPacsRefendsToOthercommittees?: number;
    searchDbFecPacsRefundsToIndividuals?: number;
    searchDbFecPacsTotalDistributions?: number;
    searchDbFecPacsTotalLoansReceived?: number;
    searchDbFecPacsTotalReceipts?: number;
    searchDbFecPacsTransFromAffiliates?: number;
    searchDbFecPacsTransfersToAffiliates?: number;
    skip?: number;
    text?: string;
    todate?: Date;
}
export declare class SearchFecPacsRequest extends SpeakeasyBase {
    queryParams: SearchFecPacsQueryParams;
}
export declare class SearchFecPacsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
