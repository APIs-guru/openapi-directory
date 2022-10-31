package operations

import (
"openapi/pkg/models/shared")

type ListWorkerBlocksQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type ListWorkerBlocksXAmzTargetEnum string

const (
    ListWorkerBlocksXAmzTargetEnumMTurkRequesterServiceV20170117ListWorkerBlocks ListWorkerBlocksXAmzTargetEnum = "MTurkRequesterServiceV20170117.ListWorkerBlocks"
)


type ListWorkerBlocksHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListWorkerBlocksXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListWorkerBlocksRequest struct {
    QueryParams ListWorkerBlocksQueryParams 
    Headers ListWorkerBlocksHeaders 
    Request shared.ListWorkerBlocksRequest `request:"mediaType=application/json"`
    
}

type ListWorkerBlocksResponse struct {
    ContentType string 
    ListWorkerBlocksResponse *shared.ListWorkerBlocksResponse 
    RequestError *interface{} 
    ServiceFault *interface{} 
    StatusCode int64 
    
}

