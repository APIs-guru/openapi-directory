package operations

import (
"openapi/pkg/models/shared")

type ListRootsQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type ListRootsXAmzTargetEnum string

const (
    ListRootsXAmzTargetEnumAwsOrganizationsV20161128ListRoots ListRootsXAmzTargetEnum = "AWSOrganizationsV20161128.ListRoots"
)


type ListRootsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListRootsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListRootsRequest struct {
    QueryParams ListRootsQueryParams 
    Headers ListRootsHeaders 
    Request shared.ListRootsRequest `request:"mediaType=application/json"`
    
}

type ListRootsResponse struct {
    AwsOrganizationsNotInUseException *interface{} 
    AccessDeniedException *interface{} 
    ContentType string 
    InvalidInputException *interface{} 
    ListRootsResponse *shared.ListRootsResponse 
    ServiceException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

