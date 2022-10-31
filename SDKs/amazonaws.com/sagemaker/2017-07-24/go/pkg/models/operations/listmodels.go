package operations

import (
"openapi/pkg/models/shared")

type ListModelsQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type ListModelsXAmzTargetEnum string

const (
    ListModelsXAmzTargetEnumSageMakerListModels ListModelsXAmzTargetEnum = "SageMaker.ListModels"
)


type ListModelsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListModelsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListModelsRequest struct {
    QueryParams ListModelsQueryParams 
    Headers ListModelsHeaders 
    Request shared.ListModelsInput `request:"mediaType=application/json"`
    
}

type ListModelsResponse struct {
    ContentType string 
    ListModelsOutput *shared.ListModelsOutput 
    StatusCode int64 
    
}

