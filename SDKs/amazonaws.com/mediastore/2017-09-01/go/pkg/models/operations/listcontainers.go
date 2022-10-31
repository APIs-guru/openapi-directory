package operations

import (
"openapi/pkg/models/shared")

type ListContainersQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type ListContainersXAmzTargetEnum string

const (
    ListContainersXAmzTargetEnumMediaStore20170901ListContainers ListContainersXAmzTargetEnum = "MediaStore_20170901.ListContainers"
)


type ListContainersHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListContainersXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListContainersRequest struct {
    QueryParams ListContainersQueryParams 
    Headers ListContainersHeaders 
    Request shared.ListContainersInput `request:"mediaType=application/json"`
    
}

type ListContainersResponse struct {
    ContentType string 
    InternalServerError *interface{} 
    ListContainersOutput *shared.ListContainersOutput 
    StatusCode int64 
    
}

