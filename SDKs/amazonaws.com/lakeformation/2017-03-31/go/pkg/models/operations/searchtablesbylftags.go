package operations

import (
"openapi/pkg/models/shared")


type SearchTablesByLfTagsXAmzTargetEnum string

const (
    SearchTablesByLfTagsXAmzTargetEnumAwsLakeFormationSearchTablesByLfTags SearchTablesByLfTagsXAmzTargetEnum = "AWSLakeFormation.SearchTablesByLFTags"
)


type SearchTablesByLfTagsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget SearchTablesByLfTagsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type SearchTablesByLfTagsRequest struct {
    Headers SearchTablesByLfTagsHeaders 
    Request shared.SearchTablesByLfTagsRequest `request:"mediaType=application/json"`
    
}

type SearchTablesByLfTagsResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    EntityNotFoundException *interface{} 
    GlueEncryptionException *interface{} 
    InternalServiceException *interface{} 
    InvalidInputException *interface{} 
    OperationTimeoutException *interface{} 
    SearchTablesByLfTagsResponse *shared.SearchTablesByLfTagsResponse 
    StatusCode int64 
    
}

