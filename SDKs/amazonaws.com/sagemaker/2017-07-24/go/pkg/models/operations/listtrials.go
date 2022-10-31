package operations

import (
"openapi/pkg/models/shared")

type ListTrialsQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type ListTrialsXAmzTargetEnum string

const (
    ListTrialsXAmzTargetEnumSageMakerListTrials ListTrialsXAmzTargetEnum = "SageMaker.ListTrials"
)


type ListTrialsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListTrialsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListTrialsRequest struct {
    QueryParams ListTrialsQueryParams 
    Headers ListTrialsHeaders 
    Request shared.ListTrialsRequest `request:"mediaType=application/json"`
    
}

type ListTrialsResponse struct {
    ContentType string 
    ListTrialsResponse *shared.ListTrialsResponse 
    ResourceNotFound *interface{} 
    StatusCode int64 
    
}

