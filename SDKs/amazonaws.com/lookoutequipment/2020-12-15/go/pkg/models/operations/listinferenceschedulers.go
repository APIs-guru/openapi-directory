package operations

import (
"openapi/pkg/models/shared")

type ListInferenceSchedulersQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type ListInferenceSchedulersXAmzTargetEnum string

const (
    ListInferenceSchedulersXAmzTargetEnumAwsLookoutEquipmentFrontendServiceListInferenceSchedulers ListInferenceSchedulersXAmzTargetEnum = "AWSLookoutEquipmentFrontendService.ListInferenceSchedulers"
)


type ListInferenceSchedulersHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListInferenceSchedulersXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListInferenceSchedulersRequest struct {
    QueryParams ListInferenceSchedulersQueryParams 
    Headers ListInferenceSchedulersHeaders 
    Request shared.ListInferenceSchedulersRequest `request:"mediaType=application/json"`
    
}

type ListInferenceSchedulersResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    InternalServerException *interface{} 
    ListInferenceSchedulersResponse *shared.ListInferenceSchedulersResponse 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

