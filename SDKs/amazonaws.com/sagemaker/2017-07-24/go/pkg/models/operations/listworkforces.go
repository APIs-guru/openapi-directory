package operations

import (
"openapi/pkg/models/shared")

type ListWorkforcesQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type ListWorkforcesXAmzTargetEnum string

const (
    ListWorkforcesXAmzTargetEnumSageMakerListWorkforces ListWorkforcesXAmzTargetEnum = "SageMaker.ListWorkforces"
)


type ListWorkforcesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListWorkforcesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListWorkforcesRequest struct {
    QueryParams ListWorkforcesQueryParams 
    Headers ListWorkforcesHeaders 
    Request shared.ListWorkforcesRequest `request:"mediaType=application/json"`
    
}

type ListWorkforcesResponse struct {
    ContentType string 
    ListWorkforcesResponse *shared.ListWorkforcesResponse 
    StatusCode int64 
    
}

