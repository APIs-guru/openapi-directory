package operations

import (
	"time"
)

type Search2017BoulderElectionExpendituresQueryParams struct {
	ChangedateFrom                                         *time.Time `queryParam:"style=form,explode=true,name=changedate.from"`
	ChangedateTo                                           *time.Time `queryParam:"style=form,explode=true,name=changedate.to"`
	CreatedateFrom                                         *time.Time `queryParam:"style=form,explode=true,name=createdate.from"`
	CreatedateTo                                           *time.Time `queryParam:"style=form,explode=true,name=createdate.to"`
	Description                                            *string    `queryParam:"style=form,explode=true,name=description"`
	Filesuffix                                             *string    `queryParam:"style=form,explode=true,name=filesuffix"`
	Fromdate                                               *time.Time `queryParam:"style=form,explode=true,name=fromdate"`
	Group                                                  *string    `queryParam:"style=form,explode=true,name=group"`
	Max                                                    *int64     `queryParam:"style=form,explode=true,name=max"`
	Maxlatitude                                            *float32   `queryParam:"style=form,explode=true,name=maxlatitude"`
	Maxlongitude                                           *float32   `queryParam:"style=form,explode=true,name=maxlongitude"`
	Minlatitude                                            *float32   `queryParam:"style=form,explode=true,name=minlatitude"`
	Minlongitude                                           *float32   `queryParam:"style=form,explode=true,name=minlongitude"`
	Name                                                   *string    `queryParam:"style=form,explode=true,name=name"`
	SearchDb2017BoulderElectionExpendituresCity            *string    `queryParam:"style=form,explode=true,name=search.db_2017_boulder_election_expenditures.city"`
	SearchDb2017BoulderElectionExpendituresCommittee       *string    `queryParam:"style=form,explode=true,name=search.db_2017_boulder_election_expenditures.committee"`
	SearchDb2017BoulderElectionExpendituresExpenditure     *float64   `queryParam:"style=form,explode=true,name=search.db_2017_boulder_election_expenditures.expenditure"`
	SearchDb2017BoulderElectionExpendituresName            *string    `queryParam:"style=form,explode=true,name=search.db_2017_boulder_election_expenditures.name"`
	SearchDb2017BoulderElectionExpendituresPurpose         *string    `queryParam:"style=form,explode=true,name=search.db_2017_boulder_election_expenditures.purpose"`
	SearchDb2017BoulderElectionExpendituresState           *string    `queryParam:"style=form,explode=true,name=search.db_2017_boulder_election_expenditures.state"`
	SearchDb2017BoulderElectionExpendituresStreet          *string    `queryParam:"style=form,explode=true,name=search.db_2017_boulder_election_expenditures.street"`
	SearchDb2017BoulderElectionExpendituresTransactionDate *string    `queryParam:"style=form,explode=true,name=search.db_2017_boulder_election_expenditures.transaction_date"`
	SearchDb2017BoulderElectionExpendituresZip             *string    `queryParam:"style=form,explode=true,name=search.db_2017_boulder_election_expenditures.zip"`
	Skip                                                   *int64     `queryParam:"style=form,explode=true,name=skip"`
	Text                                                   *string    `queryParam:"style=form,explode=true,name=text"`
	Todate                                                 *time.Time `queryParam:"style=form,explode=true,name=todate"`
}

type Search2017BoulderElectionExpendituresRequest struct {
	QueryParams Search2017BoulderElectionExpendituresQueryParams
}

type Search2017BoulderElectionExpendituresResponse struct {
	ContentType string
	StatusCode  int64
}
