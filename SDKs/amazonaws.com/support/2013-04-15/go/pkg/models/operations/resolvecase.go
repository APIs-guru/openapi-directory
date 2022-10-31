package operations

import (
"openapi/pkg/models/shared")


type ResolveCaseXAmzTargetEnum string

const (
    ResolveCaseXAmzTargetEnumAwsSupport20130415ResolveCase ResolveCaseXAmzTargetEnum = "AWSSupport_20130415.ResolveCase"
)


type ResolveCaseHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ResolveCaseXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ResolveCaseRequest struct {
    Headers ResolveCaseHeaders 
    Request shared.ResolveCaseRequest `request:"mediaType=application/json"`
    
}

type ResolveCaseResponse struct {
    CaseIDNotFound *interface{} 
    ContentType string 
    InternalServerError *interface{} 
    ResolveCaseResponse *shared.ResolveCaseResponse 
    StatusCode int64 
    
}

