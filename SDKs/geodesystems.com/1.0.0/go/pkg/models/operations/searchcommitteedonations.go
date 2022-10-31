package operations

import (
"time")

type SearchCommitteeDonationsQueryParams struct {
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
    SearchDbCommitteeDonationsAmount *float64 `queryParam:"style=form,explode=true,name=search.db_committee_donations.amount"`
    SearchDbCommitteeDonationsCity *string `queryParam:"style=form,explode=true,name=search.db_committee_donations.city"`
    SearchDbCommitteeDonationsCommittee *string `queryParam:"style=form,explode=true,name=search.db_committee_donations.committee"`
    SearchDbCommitteeDonationsDate *string `queryParam:"style=form,explode=true,name=search.db_committee_donations.date"`
    SearchDbCommitteeDonationsEmployer *string `queryParam:"style=form,explode=true,name=search.db_committee_donations.employer"`
    SearchDbCommitteeDonationsLocation *string `queryParam:"style=form,explode=true,name=search.db_committee_donations.location"`
    SearchDbCommitteeDonationsOccupation *string `queryParam:"style=form,explode=true,name=search.db_committee_donations.occupation"`
    SearchDbCommitteeDonationsRecipient *string `queryParam:"style=form,explode=true,name=search.db_committee_donations.recipient"`
    SearchDbCommitteeDonationsState *string `queryParam:"style=form,explode=true,name=search.db_committee_donations.state"`
    SearchDbCommitteeDonationsZipCode *string `queryParam:"style=form,explode=true,name=search.db_committee_donations.zip_code"`
    Skip *int64 `queryParam:"style=form,explode=true,name=skip"`
    Text *string `queryParam:"style=form,explode=true,name=text"`
    Todate *time.Time `queryParam:"style=form,explode=true,name=todate"`
    
}

type SearchCommitteeDonationsRequest struct {
    QueryParams SearchCommitteeDonationsQueryParams 
    
}

type SearchCommitteeDonationsResponse struct {
    ContentType string 
    StatusCode int64 
    
}

