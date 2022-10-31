package operations

import (
"openapi/pkg/models/shared")

type ListDeliverabilityTestReportsQueryParams struct {
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
    
}

type ListDeliverabilityTestReportsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type ListDeliverabilityTestReportsRequest struct {
    QueryParams ListDeliverabilityTestReportsQueryParams 
    Headers ListDeliverabilityTestReportsHeaders 
    
}

type ListDeliverabilityTestReportsResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    ListDeliverabilityTestReportsResponse *shared.ListDeliverabilityTestReportsResponse 
    NotFoundException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

