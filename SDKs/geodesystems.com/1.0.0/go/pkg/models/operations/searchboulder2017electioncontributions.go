package operations

import (
"time")

type SearchBoulder2017ElectionContributionsQueryParams struct {
    ChangedateFrom *time.Time `queryParam:"style=form,explode=true,name=changedate.from"`
    ChangedateTo *time.Time `queryParam:"style=form,explode=true,name=changedate.to"`
    CreatedateFrom *time.Time `queryParam:"style=form,explode=true,name=createdate.from"`
    CreatedateTo *time.Time `queryParam:"style=form,explode=true,name=createdate.to"`
    Description *string `queryParam:"style=form,explode=true,name=description"`
    Filesuffix *string `queryParam:"style=form,explode=true,name=filesuffix"`
    Fromdate *time.Time `queryParam:"style=form,explode=true,name=fromdate"`
    Group *string `queryParam:"style=form,explode=true,name=group"`
    Max *int64 `queryParam:"style=form,explode=true,name=max"`
    Maxlatitude *float32 `queryParam:"style=form,explode=true,name=maxlatitude"`
    Maxlongitude *float32 `queryParam:"style=form,explode=true,name=maxlongitude"`
    Minlatitude *float32 `queryParam:"style=form,explode=true,name=minlatitude"`
    Minlongitude *float32 `queryParam:"style=form,explode=true,name=minlongitude"`
    Name *string `queryParam:"style=form,explode=true,name=name"`
    SearchDbBoulder2017ElectionContributionsAmount *float64 `queryParam:"style=form,explode=true,name=search.db_boulder_2017_election_contributions.amount"`
    SearchDbBoulder2017ElectionContributionsCity *string `queryParam:"style=form,explode=true,name=search.db_boulder_2017_election_contributions.city"`
    SearchDbBoulder2017ElectionContributionsCommittee *string `queryParam:"style=form,explode=true,name=search.db_boulder_2017_election_contributions.committee"`
    SearchDbBoulder2017ElectionContributionsContributionType *string `queryParam:"style=form,explode=true,name=search.db_boulder_2017_election_contributions.contribution_type"`
    SearchDbBoulder2017ElectionContributionsDate *string `queryParam:"style=form,explode=true,name=search.db_boulder_2017_election_contributions.date"`
    SearchDbBoulder2017ElectionContributionsFirstName *string `queryParam:"style=form,explode=true,name=search.db_boulder_2017_election_contributions.first_name"`
    SearchDbBoulder2017ElectionContributionsFromCandidate *string `queryParam:"style=form,explode=true,name=search.db_boulder_2017_election_contributions.from_candidate"`
    SearchDbBoulder2017ElectionContributionsLastName *string `queryParam:"style=form,explode=true,name=search.db_boulder_2017_election_contributions.last_name"`
    SearchDbBoulder2017ElectionContributionsLocation *string `queryParam:"style=form,explode=true,name=search.db_boulder_2017_election_contributions.location"`
    SearchDbBoulder2017ElectionContributionsMatchAmount *float64 `queryParam:"style=form,explode=true,name=search.db_boulder_2017_election_contributions.match_amount"`
    SearchDbBoulder2017ElectionContributionsState *string `queryParam:"style=form,explode=true,name=search.db_boulder_2017_election_contributions.state"`
    SearchDbBoulder2017ElectionContributionsStreet *string `queryParam:"style=form,explode=true,name=search.db_boulder_2017_election_contributions.street"`
    SearchDbBoulder2017ElectionContributionsYtdAmount *float64 `queryParam:"style=form,explode=true,name=search.db_boulder_2017_election_contributions.ytd_amount"`
    SearchDbBoulder2017ElectionContributionsZip *string `queryParam:"style=form,explode=true,name=search.db_boulder_2017_election_contributions.zip"`
    Skip *int64 `queryParam:"style=form,explode=true,name=skip"`
    Text *string `queryParam:"style=form,explode=true,name=text"`
    Todate *time.Time `queryParam:"style=form,explode=true,name=todate"`
    
}

type SearchBoulder2017ElectionContributionsRequest struct {
    QueryParams SearchBoulder2017ElectionContributionsQueryParams 
    
}

type SearchBoulder2017ElectionContributionsResponse struct {
    ContentType string 
    StatusCode int64 
    
}

