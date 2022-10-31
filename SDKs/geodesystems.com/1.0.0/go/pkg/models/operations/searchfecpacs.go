package operations

import (
	"time"
)

type SearchFecPacsQueryParams struct {
	ChangedateFrom                                  *time.Time `queryParam:"style=form,explode=true,name=changedate.from"`
	ChangedateTo                                    *time.Time `queryParam:"style=form,explode=true,name=changedate.to"`
	CreatedateFrom                                  *time.Time `queryParam:"style=form,explode=true,name=createdate.from"`
	CreatedateTo                                    *time.Time `queryParam:"style=form,explode=true,name=createdate.to"`
	Description                                     *string    `queryParam:"style=form,explode=true,name=description"`
	Filesuffix                                      *string    `queryParam:"style=form,explode=true,name=filesuffix"`
	Fromdate                                        *time.Time `queryParam:"style=form,explode=true,name=fromdate"`
	Group                                           *string    `queryParam:"style=form,explode=true,name=group"`
	Max                                             *int64     `queryParam:"style=form,explode=true,name=max"`
	Maxlatitude                                     *float32   `queryParam:"style=form,explode=true,name=maxlatitude"`
	Maxlongitude                                    *float32   `queryParam:"style=form,explode=true,name=maxlongitude"`
	Minlatitude                                     *float32   `queryParam:"style=form,explode=true,name=minlatitude"`
	Minlongitude                                    *float32   `queryParam:"style=form,explode=true,name=minlongitude"`
	Name                                            *string    `queryParam:"style=form,explode=true,name=name"`
	SearchDbFecPacsBeginningCash                    *float64   `queryParam:"style=form,explode=true,name=search.db_fec_pacs.beginning_cash"`
	SearchDbFecPacsCandidateLoanRepayments          *float64   `queryParam:"style=form,explode=true,name=search.db_fec_pacs.candidate_loan_repayments"`
	SearchDbFecPacsCommittee                        *string    `queryParam:"style=form,explode=true,name=search.db_fec_pacs.committee"`
	SearchDbFecPacsContributionsFromCandidate       *float64   `queryParam:"style=form,explode=true,name=search.db_fec_pacs.contributions_from_candidate"`
	SearchDbFecPacsContributionsFromIndividuals     *float64   `queryParam:"style=form,explode=true,name=search.db_fec_pacs.contributions_from_individuals"`
	SearchDbFecPacsContributionsFromOtherCommittees *float64   `queryParam:"style=form,explode=true,name=search.db_fec_pacs.contributions_from_other_committees"`
	SearchDbFecPacsContributionsToOtherCommittee    *float64   `queryParam:"style=form,explode=true,name=search.db_fec_pacs.contributions_to_other_committee"`
	SearchDbFecPacsEndingCash                       *float64   `queryParam:"style=form,explode=true,name=search.db_fec_pacs.ending_cash"`
	SearchDbFecPacsLoanRepayments                   *float64   `queryParam:"style=form,explode=true,name=search.db_fec_pacs.loan_repayments"`
	SearchDbFecPacsLoansFromCandidate               *float64   `queryParam:"style=form,explode=true,name=search.db_fec_pacs.loans_from_candidate"`
	SearchDbFecPacsRefendsToOthercommittees         *float64   `queryParam:"style=form,explode=true,name=search.db_fec_pacs.refends_to_othercommittees"`
	SearchDbFecPacsRefundsToIndividuals             *float64   `queryParam:"style=form,explode=true,name=search.db_fec_pacs.refunds_to_individuals"`
	SearchDbFecPacsTotalDistributions               *float64   `queryParam:"style=form,explode=true,name=search.db_fec_pacs.total_distributions"`
	SearchDbFecPacsTotalLoansReceived               *float64   `queryParam:"style=form,explode=true,name=search.db_fec_pacs.total_loans_received"`
	SearchDbFecPacsTotalReceipts                    *float64   `queryParam:"style=form,explode=true,name=search.db_fec_pacs.total_receipts"`
	SearchDbFecPacsTransFromAffiliates              *float64   `queryParam:"style=form,explode=true,name=search.db_fec_pacs.trans_from_affiliates"`
	SearchDbFecPacsTransfersToAffiliates            *float64   `queryParam:"style=form,explode=true,name=search.db_fec_pacs.transfers_to_affiliates"`
	Skip                                            *int64     `queryParam:"style=form,explode=true,name=skip"`
	Text                                            *string    `queryParam:"style=form,explode=true,name=text"`
	Todate                                          *time.Time `queryParam:"style=form,explode=true,name=todate"`
}

type SearchFecPacsRequest struct {
	QueryParams SearchFecPacsQueryParams
}

type SearchFecPacsResponse struct {
	ContentType string
	StatusCode  int64
}
