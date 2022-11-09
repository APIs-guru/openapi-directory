import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SearchFecPacsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=changedate.from" })
  changedateFrom?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=changedate.to" })
  changedateTo?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=createdate.from" })
  createdateFrom?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=createdate.to" })
  createdateTo?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=description" })
  description?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filesuffix" })
  filesuffix?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fromdate" })
  fromdate?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=group" })
  group?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=max" })
  max?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxlatitude" })
  maxlatitude?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxlongitude" })
  maxlongitude?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=minlatitude" })
  minlatitude?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=minlongitude" })
  minlongitude?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_fec_pacs.beginning_cash" })
  searchDbFecPacsBeginningCash?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_fec_pacs.candidate_loan_repayments" })
  searchDbFecPacsCandidateLoanRepayments?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_fec_pacs.committee" })
  searchDbFecPacsCommittee?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_fec_pacs.contributions_from_candidate" })
  searchDbFecPacsContributionsFromCandidate?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_fec_pacs.contributions_from_individuals" })
  searchDbFecPacsContributionsFromIndividuals?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_fec_pacs.contributions_from_other_committees" })
  searchDbFecPacsContributionsFromOtherCommittees?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_fec_pacs.contributions_to_other_committee" })
  searchDbFecPacsContributionsToOtherCommittee?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_fec_pacs.ending_cash" })
  searchDbFecPacsEndingCash?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_fec_pacs.loan_repayments" })
  searchDbFecPacsLoanRepayments?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_fec_pacs.loans_from_candidate" })
  searchDbFecPacsLoansFromCandidate?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_fec_pacs.refends_to_othercommittees" })
  searchDbFecPacsRefendsToOthercommittees?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_fec_pacs.refunds_to_individuals" })
  searchDbFecPacsRefundsToIndividuals?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_fec_pacs.total_distributions" })
  searchDbFecPacsTotalDistributions?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_fec_pacs.total_loans_received" })
  searchDbFecPacsTotalLoansReceived?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_fec_pacs.total_receipts" })
  searchDbFecPacsTotalReceipts?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_fec_pacs.trans_from_affiliates" })
  searchDbFecPacsTransFromAffiliates?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_fec_pacs.transfers_to_affiliates" })
  searchDbFecPacsTransfersToAffiliates?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=text" })
  text?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=todate" })
  todate?: Date;
}


export class SearchFecPacsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SearchFecPacsQueryParams;
}


export class SearchFecPacsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
