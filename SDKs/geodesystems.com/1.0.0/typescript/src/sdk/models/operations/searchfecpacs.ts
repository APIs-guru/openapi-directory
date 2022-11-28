import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SearchFecPacsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=changedate.from" })
  changedateFrom?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=changedate.to" })
  changedateTo?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdate.from" })
  createdateFrom?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdate.to" })
  createdateTo?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filesuffix" })
  filesuffix?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromdate" })
  fromdate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=group" })
  group?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max" })
  max?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxlatitude" })
  maxlatitude?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxlongitude" })
  maxlongitude?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minlatitude" })
  minlatitude?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minlongitude" })
  minlongitude?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_fec_pacs.beginning_cash" })
  searchDbFecPacsBeginningCash?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_fec_pacs.candidate_loan_repayments" })
  searchDbFecPacsCandidateLoanRepayments?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_fec_pacs.committee" })
  searchDbFecPacsCommittee?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_fec_pacs.contributions_from_candidate" })
  searchDbFecPacsContributionsFromCandidate?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_fec_pacs.contributions_from_individuals" })
  searchDbFecPacsContributionsFromIndividuals?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_fec_pacs.contributions_from_other_committees" })
  searchDbFecPacsContributionsFromOtherCommittees?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_fec_pacs.contributions_to_other_committee" })
  searchDbFecPacsContributionsToOtherCommittee?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_fec_pacs.ending_cash" })
  searchDbFecPacsEndingCash?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_fec_pacs.loan_repayments" })
  searchDbFecPacsLoanRepayments?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_fec_pacs.loans_from_candidate" })
  searchDbFecPacsLoansFromCandidate?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_fec_pacs.refends_to_othercommittees" })
  searchDbFecPacsRefendsToOthercommittees?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_fec_pacs.refunds_to_individuals" })
  searchDbFecPacsRefundsToIndividuals?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_fec_pacs.total_distributions" })
  searchDbFecPacsTotalDistributions?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_fec_pacs.total_loans_received" })
  searchDbFecPacsTotalLoansReceived?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_fec_pacs.total_receipts" })
  searchDbFecPacsTotalReceipts?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_fec_pacs.trans_from_affiliates" })
  searchDbFecPacsTransFromAffiliates?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_fec_pacs.transfers_to_affiliates" })
  searchDbFecPacsTransfersToAffiliates?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=todate" })
  todate?: Date;
}


export class SearchFecPacsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SearchFecPacsQueryParams;
}


export class SearchFecPacsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
