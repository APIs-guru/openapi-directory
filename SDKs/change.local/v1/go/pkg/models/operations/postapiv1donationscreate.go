package operations

import (
"openapi/pkg/models/shared")


type PostAPIV1DonationsCreateFundingSourceEnum string

const (
    PostAPIV1DonationsCreateFundingSourceEnumMerchant PostAPIV1DonationsCreateFundingSourceEnum = "merchant"
PostAPIV1DonationsCreateFundingSourceEnumCustomer PostAPIV1DonationsCreateFundingSourceEnum = "customer"
)


type PostAPIV1DonationsCreateQueryParams struct {
    Amount string `queryParam:"style=form,explode=true,name=amount"`
    FundingSource PostAPIV1DonationsCreateFundingSourceEnum `queryParam:"style=form,explode=true,name=funding_source"`
    NonprofitID string `queryParam:"style=form,explode=true,name=nonprofit_id"`
    ZipCode *string `queryParam:"style=form,explode=true,name=zip_code"`
    
}

type PostAPIV1DonationsCreateSecurity struct {
    BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
    
}

type PostAPIV1DonationsCreateRequest struct {
    QueryParams PostAPIV1DonationsCreateQueryParams 
    Security PostAPIV1DonationsCreateSecurity 
    
}

type PostAPIV1DonationsCreateResponse struct {
    ContentType string 
    StatusCode int64 
    
}

