package operations

import (
"openapi/pkg/models/shared")

type ListAlgorithmsQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type ListAlgorithmsXAmzTargetEnum string

const (
    ListAlgorithmsXAmzTargetEnumSageMakerListAlgorithms ListAlgorithmsXAmzTargetEnum = "SageMaker.ListAlgorithms"
)


type ListAlgorithmsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListAlgorithmsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListAlgorithmsRequest struct {
    QueryParams ListAlgorithmsQueryParams 
    Headers ListAlgorithmsHeaders 
    Request shared.ListAlgorithmsInput `request:"mediaType=application/json"`
    
}

type ListAlgorithmsResponse struct {
    ContentType string 
    ListAlgorithmsOutput *shared.ListAlgorithmsOutput 
    StatusCode int64 
    
}

