package operations

import (
"openapi/pkg/models/shared")

type GetMediaForFragmentListHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetMediaForFragmentListRequestBody struct {
    Fragments []string `json:"Fragments"`
    StreamArn *string `json:"StreamARN,omitempty"`
    StreamName *string `json:"StreamName,omitempty"`
    
}

type GetMediaForFragmentListRequest struct {
    Headers GetMediaForFragmentListHeaders 
    Request GetMediaForFragmentListRequestBody `request:"mediaType=application/json"`
    
}

type GetMediaForFragmentListResponse struct {
    ClientLimitExceededException *interface{} 
    ContentType string 
    GetMediaForFragmentListOutput *shared.GetMediaForFragmentListOutput 
    InvalidArgumentException *interface{} 
    NotAuthorizedException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

