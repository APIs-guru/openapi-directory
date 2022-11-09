import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SearchFeccandidatesQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_feccandidates.beginning_cash" })
  searchDbFeccandidatesBeginningCash?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_feccandidates.candidate_loan_repayments" })
  searchDbFeccandidatesCandidateLoanRepayments?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_feccandidates.committee_refunds" })
  searchDbFeccandidatesCommitteeRefunds?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_feccandidates.contributions_from_candidate" })
  searchDbFeccandidatesContributionsFromCandidate?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_feccandidates.contributions_from_other_committees" })
  searchDbFeccandidatesContributionsFromOtherCommittees?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_feccandidates.contributions_from_party_committees" })
  searchDbFeccandidatesContributionsFromPartyCommittees?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_feccandidates.coverage_end_date" })
  searchDbFeccandidatesCoverageEndDate?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_feccandidates.debts_owed_by" })
  searchDbFeccandidatesDebtsOwedBy?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_feccandidates.district" })
  searchDbFeccandidatesDistrict?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_feccandidates.ending_cash" })
  searchDbFeccandidatesEndingCash?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_feccandidates.gender" })
  searchDbFeccandidatesGender?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_feccandidates.individual_refunds" })
  searchDbFeccandidatesIndividualRefunds?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_feccandidates.loans_from_candidates" })
  searchDbFeccandidatesLoansFromCandidates?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_feccandidates.name" })
  searchDbFeccandidatesName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_feccandidates.other_loan_repayments" })
  searchDbFeccandidatesOtherLoanRepayments?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_feccandidates.other_loans" })
  searchDbFeccandidatesOtherLoans?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_feccandidates.party" })
  searchDbFeccandidatesParty?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_feccandidates.state" })
  searchDbFeccandidatesState?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_feccandidates.total_disbursements" })
  searchDbFeccandidatesTotalDisbursements?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_feccandidates.total_indivual_contributions" })
  searchDbFeccandidatesTotalIndivualContributions?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_feccandidates.total_receipts" })
  searchDbFeccandidatesTotalReceipts?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_feccandidates.transfers_from_committees" })
  searchDbFeccandidatesTransfersFromCommittees?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search.db_feccandidates.transfers_to_committees" })
  searchDbFeccandidatesTransfersToCommittees?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=text" })
  text?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=todate" })
  todate?: Date;
}


export class SearchFeccandidatesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SearchFeccandidatesQueryParams;
}


export class SearchFeccandidatesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
