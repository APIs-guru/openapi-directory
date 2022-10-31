package operations

import (
"time")

type SearchBostonCrimeQueryParams struct {
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
    SearchDbBostonCrimeDayOfWeek *string `queryParam:"style=form,explode=true,name=search.db_boston_crime.day_of_week"`
    SearchDbBostonCrimeDistrict *string `queryParam:"style=form,explode=true,name=search.db_boston_crime.district"`
    SearchDbBostonCrimeHour *float64 `queryParam:"style=form,explode=true,name=search.db_boston_crime.hour"`
    SearchDbBostonCrimeLocation *string `queryParam:"style=form,explode=true,name=search.db_boston_crime.location"`
    SearchDbBostonCrimeMonth *float64 `queryParam:"style=form,explode=true,name=search.db_boston_crime.month"`
    SearchDbBostonCrimeOffense *string `queryParam:"style=form,explode=true,name=search.db_boston_crime.offense"`
    SearchDbBostonCrimeOffenseCodeGroup *string `queryParam:"style=form,explode=true,name=search.db_boston_crime.offense_code_group"`
    SearchDbBostonCrimeOffenseDescription *string `queryParam:"style=form,explode=true,name=search.db_boston_crime.offense_description"`
    SearchDbBostonCrimeReportingArea *string `queryParam:"style=form,explode=true,name=search.db_boston_crime.reporting_area"`
    SearchDbBostonCrimeShooting *string `queryParam:"style=form,explode=true,name=search.db_boston_crime.shooting"`
    SearchDbBostonCrimeStreet *string `queryParam:"style=form,explode=true,name=search.db_boston_crime.street"`
    SearchDbBostonCrimeYear *float64 `queryParam:"style=form,explode=true,name=search.db_boston_crime.year"`
    Skip *int64 `queryParam:"style=form,explode=true,name=skip"`
    Text *string `queryParam:"style=form,explode=true,name=text"`
    Todate *time.Time `queryParam:"style=form,explode=true,name=todate"`
    
}

type SearchBostonCrimeRequest struct {
    QueryParams SearchBostonCrimeQueryParams 
    
}

type SearchBostonCrimeResponse struct {
    ContentType string 
    StatusCode int64 
    
}

