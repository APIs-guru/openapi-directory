package operations

import (
"openapi/pkg/models/shared")

type ListActivityTypesQueryParams struct {
    MaximumPageSize *string `queryParam:"style=form,explode=true,name=maximumPageSize"`
    NextPageToken *string `queryParam:"style=form,explode=true,name=nextPageToken"`
    
}


type ListActivityTypesXAmzTargetEnum string

const (
    ListActivityTypesXAmzTargetEnumSimpleWorkflowServiceListActivityTypes ListActivityTypesXAmzTargetEnum = "SimpleWorkflowService.ListActivityTypes"
)


type ListActivityTypesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListActivityTypesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListActivityTypesRequest struct {
    QueryParams ListActivityTypesQueryParams 
    Headers ListActivityTypesHeaders 
    Request shared.ListActivityTypesInput `request:"mediaType=application/json"`
    
}

type ListActivityTypesResponse struct {
    ActivityTypeInfos *shared.ActivityTypeInfos 
    ContentType string 
    OperationNotPermittedFault *interface{} 
    StatusCode int64 
    UnknownResourceFault *interface{} 
    
}

