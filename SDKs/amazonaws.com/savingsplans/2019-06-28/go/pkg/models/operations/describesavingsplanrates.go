package operations

import (
"openapi/pkg/models/shared")

type DescribeSavingsPlanRatesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DescribeSavingsPlanRatesRequestBody struct {
    Filters []shared.SavingsPlanRateFilter `json:"filters,omitempty"`
    MaxResults *int64 `json:"maxResults,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    SavingsPlanID string `json:"savingsPlanId"`
    
}

type DescribeSavingsPlanRatesRequest struct {
    Headers DescribeSavingsPlanRatesHeaders 
    Request DescribeSavingsPlanRatesRequestBody `request:"mediaType=application/json"`
    
}

type DescribeSavingsPlanRatesResponse struct {
    ContentType string 
    DescribeSavingsPlanRatesResponse *shared.DescribeSavingsPlanRatesResponse 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ValidationException *interface{} 
    
}

