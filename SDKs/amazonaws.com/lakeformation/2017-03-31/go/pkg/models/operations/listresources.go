package operations

import (
"openapi/pkg/models/shared")

type ListResourcesQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type ListResourcesXAmzTargetEnum string

const (
    ListResourcesXAmzTargetEnumAwsLakeFormationListResources ListResourcesXAmzTargetEnum = "AWSLakeFormation.ListResources"
)


type ListResourcesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListResourcesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListResourcesRequest struct {
    QueryParams ListResourcesQueryParams 
    Headers ListResourcesHeaders 
    Request shared.ListResourcesRequest `request:"mediaType=application/json"`
    
}

type ListResourcesResponse struct {
    ContentType string 
    InternalServiceException *interface{} 
    InvalidInputException *interface{} 
    ListResourcesResponse *shared.ListResourcesResponse 
    OperationTimeoutException *interface{} 
    StatusCode int64 
    
}

