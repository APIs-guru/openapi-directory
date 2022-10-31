package operations

import (
"time")

type SearchBolderRentalHousingQueryParams struct {
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
    SearchDbBolderRentalHousingBldgtype *string `queryParam:"style=form,explode=true,name=search.db_bolder_rental_housing.bldgtype"`
    SearchDbBolderRentalHousingCompany *string `queryParam:"style=form,explode=true,name=search.db_bolder_rental_housing.company"`
    SearchDbBolderRentalHousingComplexnm *string `queryParam:"style=form,explode=true,name=search.db_bolder_rental_housing.complexnm"`
    SearchDbBolderRentalHousingDwellunits *int64 `queryParam:"style=form,explode=true,name=search.db_bolder_rental_housing.dwellunits"`
    SearchDbBolderRentalHousingEngcompl *string `queryParam:"style=form,explode=true,name=search.db_bolder_rental_housing.engcompl"`
    SearchDbBolderRentalHousingLicenseexp *string `queryParam:"style=form,explode=true,name=search.db_bolder_rental_housing.licenseexp"`
    SearchDbBolderRentalHousingLicensenum *string `queryParam:"style=form,explode=true,name=search.db_bolder_rental_housing.licensenum"`
    SearchDbBolderRentalHousingLocation *string `queryParam:"style=form,explode=true,name=search.db_bolder_rental_housing.location"`
    SearchDbBolderRentalHousingName *string `queryParam:"style=form,explode=true,name=search.db_bolder_rental_housing.name"`
    SearchDbBolderRentalHousingNeighbrhd *string `queryParam:"style=form,explode=true,name=search.db_bolder_rental_housing.neighbrhd"`
    SearchDbBolderRentalHousingPerson1 *string `queryParam:"style=form,explode=true,name=search.db_bolder_rental_housing.person_1"`
    SearchDbBolderRentalHousingPerson2 *string `queryParam:"style=form,explode=true,name=search.db_bolder_rental_housing.person_2"`
    SearchDbBolderRentalHousingPersontype *string `queryParam:"style=form,explode=true,name=search.db_bolder_rental_housing.persontype"`
    SearchDbBolderRentalHousingPpl1Coname *string `queryParam:"style=form,explode=true,name=search.db_bolder_rental_housing.ppl1_coname"`
    SearchDbBolderRentalHousingPpl1Role *string `queryParam:"style=form,explode=true,name=search.db_bolder_rental_housing.ppl1_role"`
    SearchDbBolderRentalHousingPpl2Coname *string `queryParam:"style=form,explode=true,name=search.db_bolder_rental_housing.ppl2_coname"`
    SearchDbBolderRentalHousingPpl2Role *string `queryParam:"style=form,explode=true,name=search.db_bolder_rental_housing.ppl2_role"`
    SearchDbBolderRentalHousingPropaddr1 *string `queryParam:"style=form,explode=true,name=search.db_bolder_rental_housing.propaddr1"`
    SearchDbBolderRentalHousingRentaltype *string `queryParam:"style=form,explode=true,name=search.db_bolder_rental_housing.rentaltype"`
    SearchDbBolderRentalHousingRoomunits *int64 `queryParam:"style=form,explode=true,name=search.db_bolder_rental_housing.roomunits"`
    Skip *int64 `queryParam:"style=form,explode=true,name=skip"`
    Text *string `queryParam:"style=form,explode=true,name=text"`
    Todate *time.Time `queryParam:"style=form,explode=true,name=todate"`
    
}

type SearchBolderRentalHousingRequest struct {
    QueryParams SearchBolderRentalHousingQueryParams 
    
}

type SearchBolderRentalHousingResponse struct {
    ContentType string 
    StatusCode int64 
    
}

