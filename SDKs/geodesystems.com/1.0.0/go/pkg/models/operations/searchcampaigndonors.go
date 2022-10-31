package operations

import (
"time")

type SearchCampaignDonorsQueryParams struct {
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
    SearchDbCampaignDonorsAmount *float64 `queryParam:"style=form,explode=true,name=search.db_campaign_donors.amount"`
    SearchDbCampaignDonorsCity *string `queryParam:"style=form,explode=true,name=search.db_campaign_donors.city"`
    SearchDbCampaignDonorsCommittee *string `queryParam:"style=form,explode=true,name=search.db_campaign_donors.committee"`
    SearchDbCampaignDonorsDate *string `queryParam:"style=form,explode=true,name=search.db_campaign_donors.date"`
    SearchDbCampaignDonorsDonor *string `queryParam:"style=form,explode=true,name=search.db_campaign_donors.donor"`
    SearchDbCampaignDonorsEmployer *string `queryParam:"style=form,explode=true,name=search.db_campaign_donors.employer"`
    SearchDbCampaignDonorsGender *string `queryParam:"style=form,explode=true,name=search.db_campaign_donors.gender"`
    SearchDbCampaignDonorsLocation *string `queryParam:"style=form,explode=true,name=search.db_campaign_donors.location"`
    SearchDbCampaignDonorsOccupation *string `queryParam:"style=form,explode=true,name=search.db_campaign_donors.occupation"`
    SearchDbCampaignDonorsParty *string `queryParam:"style=form,explode=true,name=search.db_campaign_donors.party"`
    SearchDbCampaignDonorsState *string `queryParam:"style=form,explode=true,name=search.db_campaign_donors.state"`
    SearchDbCampaignDonorsZipCode *string `queryParam:"style=form,explode=true,name=search.db_campaign_donors.zip_code"`
    Skip *int64 `queryParam:"style=form,explode=true,name=skip"`
    Text *string `queryParam:"style=form,explode=true,name=text"`
    Todate *time.Time `queryParam:"style=form,explode=true,name=todate"`
    
}

type SearchCampaignDonorsRequest struct {
    QueryParams SearchCampaignDonorsQueryParams 
    
}

type SearchCampaignDonorsResponse struct {
    ContentType string 
    StatusCode int64 
    
}

