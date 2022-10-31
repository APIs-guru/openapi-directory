package operations

import (
"openapi/pkg/models/shared")


type GetLfTagXAmzTargetEnum string

const (
    GetLfTagXAmzTargetEnumAwsLakeFormationGetLfTag GetLfTagXAmzTargetEnum = "AWSLakeFormation.GetLFTag"
)


type GetLfTagHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetLfTagXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetLfTagRequest struct {
    Headers GetLfTagHeaders 
    Request shared.GetLfTagRequest `request:"mediaType=application/json"`
    
}

type GetLfTagResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    EntityNotFoundException *interface{} 
    GetLfTagResponse *shared.GetLfTagResponse 
    InternalServiceException *interface{} 
    InvalidInputException *interface{} 
    OperationTimeoutException *interface{} 
    StatusCode int64 
    
}

