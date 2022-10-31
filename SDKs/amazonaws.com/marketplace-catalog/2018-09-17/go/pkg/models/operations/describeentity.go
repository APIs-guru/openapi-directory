package operations

import (
"openapi/pkg/models/shared")

type DescribeEntityQueryParams struct {
    Catalog string `queryParam:"style=form,explode=true,name=catalog"`
    EntityID string `queryParam:"style=form,explode=true,name=entityId"`
    
}

type DescribeEntityHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DescribeEntityRequest struct {
    QueryParams DescribeEntityQueryParams 
    Headers DescribeEntityHeaders 
    
}

type DescribeEntityResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    DescribeEntityResponse *shared.DescribeEntityResponse 
    InternalServiceException *interface{} 
    ResourceNotFoundException *interface{} 
    ResourceNotSupportedException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

