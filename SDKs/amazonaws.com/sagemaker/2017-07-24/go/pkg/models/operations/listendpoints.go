package operations

import (
"openapi/pkg/models/shared")

type ListEndpointsQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type ListEndpointsXAmzTargetEnum string

const (
    ListEndpointsXAmzTargetEnumSageMakerListEndpoints ListEndpointsXAmzTargetEnum = "SageMaker.ListEndpoints"
)


type ListEndpointsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListEndpointsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListEndpointsRequest struct {
    QueryParams ListEndpointsQueryParams 
    Headers ListEndpointsHeaders 
    Request shared.ListEndpointsInput `request:"mediaType=application/json"`
    
}

type ListEndpointsResponse struct {
    ContentType string 
    ListEndpointsOutput *shared.ListEndpointsOutput 
    StatusCode int64 
    
}

