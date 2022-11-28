import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SearchFeccandidatesQueryParams extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_feccandidates.beginning_cash" })
  searchDbFeccandidatesBeginningCash?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_feccandidates.candidate_loan_repayments" })
  searchDbFeccandidatesCandidateLoanRepayments?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_feccandidates.committee_refunds" })
  searchDbFeccandidatesCommitteeRefunds?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_feccandidates.contributions_from_candidate" })
  searchDbFeccandidatesContributionsFromCandidate?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_feccandidates.contributions_from_other_committees" })
  searchDbFeccandidatesContributionsFromOtherCommittees?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_feccandidates.contributions_from_party_committees" })
  searchDbFeccandidatesContributionsFromPartyCommittees?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_feccandidates.coverage_end_date" })
  searchDbFeccandidatesCoverageEndDate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_feccandidates.debts_owed_by" })
  searchDbFeccandidatesDebtsOwedBy?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_feccandidates.district" })
  searchDbFeccandidatesDistrict?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_feccandidates.ending_cash" })
  searchDbFeccandidatesEndingCash?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_feccandidates.gender" })
  searchDbFeccandidatesGender?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_feccandidates.individual_refunds" })
  searchDbFeccandidatesIndividualRefunds?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_feccandidates.loans_from_candidates" })
  searchDbFeccandidatesLoansFromCandidates?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_feccandidates.name" })
  searchDbFeccandidatesName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_feccandidates.other_loan_repayments" })
  searchDbFeccandidatesOtherLoanRepayments?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_feccandidates.other_loans" })
  searchDbFeccandidatesOtherLoans?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_feccandidates.party" })
  searchDbFeccandidatesParty?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_feccandidates.state" })
  searchDbFeccandidatesState?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_feccandidates.total_disbursements" })
  searchDbFeccandidatesTotalDisbursements?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_feccandidates.total_indivual_contributions" })
  searchDbFeccandidatesTotalIndivualContributions?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_feccandidates.total_receipts" })
  searchDbFeccandidatesTotalReceipts?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_feccandidates.transfers_from_committees" })
  searchDbFeccandidatesTransfersFromCommittees?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_feccandidates.transfers_to_committees" })
  searchDbFeccandidatesTransfersToCommittees?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=todate" })
  todate?: Date;
}


export class SearchFeccandidatesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SearchFeccandidatesQueryParams;
}


export class SearchFeccandidatesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
