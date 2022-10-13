package operations

import (
	"time"
)

type SearchFeccandidatesQueryParams struct {
	ChangedateFrom                                        *time.Time `queryParam:"style=form,explode=true,name=changedate.from"`
	ChangedateTo                                          *time.Time `queryParam:"style=form,explode=true,name=changedate.to"`
	CreatedateFrom                                        *time.Time `queryParam:"style=form,explode=true,name=createdate.from"`
	CreatedateTo                                          *time.Time `queryParam:"style=form,explode=true,name=createdate.to"`
	Description                                           *string    `queryParam:"style=form,explode=true,name=description"`
	Filesuffix                                            *string    `queryParam:"style=form,explode=true,name=filesuffix"`
	Fromdate                                              *time.Time `queryParam:"style=form,explode=true,name=fromdate"`
	Group                                                 *string    `queryParam:"style=form,explode=true,name=group"`
	Max                                                   *int64     `queryParam:"style=form,explode=true,name=max"`
	Maxlatitude                                           *float32   `queryParam:"style=form,explode=true,name=maxlatitude"`
	Maxlongitude                                          *float32   `queryParam:"style=form,explode=true,name=maxlongitude"`
	Minlatitude                                           *float32   `queryParam:"style=form,explode=true,name=minlatitude"`
	Minlongitude                                          *float32   `queryParam:"style=form,explode=true,name=minlongitude"`
	Name                                                  *string    `queryParam:"style=form,explode=true,name=name"`
	SearchDbFeccandidatesBeginningCash                    *float64   `queryParam:"style=form,explode=true,name=search.db_feccandidates.beginning_cash"`
	SearchDbFeccandidatesCandidateLoanRepayments          *float64   `queryParam:"style=form,explode=true,name=search.db_feccandidates.candidate_loan_repayments"`
	SearchDbFeccandidatesCommitteeRefunds                 *float64   `queryParam:"style=form,explode=true,name=search.db_feccandidates.committee_refunds"`
	SearchDbFeccandidatesContributionsFromCandidate       *float64   `queryParam:"style=form,explode=true,name=search.db_feccandidates.contributions_from_candidate"`
	SearchDbFeccandidatesContributionsFromOtherCommittees *float64   `queryParam:"style=form,explode=true,name=search.db_feccandidates.contributions_from_other_committees"`
	SearchDbFeccandidatesContributionsFromPartyCommittees *float64   `queryParam:"style=form,explode=true,name=search.db_feccandidates.contributions_from_party_committees"`
	SearchDbFeccandidatesCoverageEndDate                  *string    `queryParam:"style=form,explode=true,name=search.db_feccandidates.coverage_end_date"`
	SearchDbFeccandidatesDebtsOwedBy                      *float64   `queryParam:"style=form,explode=true,name=search.db_feccandidates.debts_owed_by"`
	SearchDbFeccandidatesDistrict                         *string    `queryParam:"style=form,explode=true,name=search.db_feccandidates.district"`
	SearchDbFeccandidatesEndingCash                       *float64   `queryParam:"style=form,explode=true,name=search.db_feccandidates.ending_cash"`
	SearchDbFeccandidatesGender                           *string    `queryParam:"style=form,explode=true,name=search.db_feccandidates.gender"`
	SearchDbFeccandidatesIndividualRefunds                *float64   `queryParam:"style=form,explode=true,name=search.db_feccandidates.individual_refunds"`
	SearchDbFeccandidatesLoansFromCandidates              *float64   `queryParam:"style=form,explode=true,name=search.db_feccandidates.loans_from_candidates"`
	SearchDbFeccandidatesName                             *string    `queryParam:"style=form,explode=true,name=search.db_feccandidates.name"`
	SearchDbFeccandidatesOtherLoanRepayments              *float64   `queryParam:"style=form,explode=true,name=search.db_feccandidates.other_loan_repayments"`
	SearchDbFeccandidatesOtherLoans                       *float64   `queryParam:"style=form,explode=true,name=search.db_feccandidates.other_loans"`
	SearchDbFeccandidatesParty                            *string    `queryParam:"style=form,explode=true,name=search.db_feccandidates.party"`
	SearchDbFeccandidatesState                            *string    `queryParam:"style=form,explode=true,name=search.db_feccandidates.state"`
	SearchDbFeccandidatesTotalDisbursements               *float64   `queryParam:"style=form,explode=true,name=search.db_feccandidates.total_disbursements"`
	SearchDbFeccandidatesTotalIndivualContributions       *float64   `queryParam:"style=form,explode=true,name=search.db_feccandidates.total_indivual_contributions"`
	SearchDbFeccandidatesTotalReceipts                    *float64   `queryParam:"style=form,explode=true,name=search.db_feccandidates.total_receipts"`
	SearchDbFeccandidatesTransfersFromCommittees          *float64   `queryParam:"style=form,explode=true,name=search.db_feccandidates.transfers_from_committees"`
	SearchDbFeccandidatesTransfersToCommittees            *float64   `queryParam:"style=form,explode=true,name=search.db_feccandidates.transfers_to_committees"`
	Skip                                                  *int64     `queryParam:"style=form,explode=true,name=skip"`
	Text                                                  *string    `queryParam:"style=form,explode=true,name=text"`
	Todate                                                *time.Time `queryParam:"style=form,explode=true,name=todate"`
}

type SearchFeccandidatesRequest struct {
	QueryParams SearchFeccandidatesQueryParams
}

type SearchFeccandidatesResponse struct {
	ContentType string
	StatusCode  int64
}
