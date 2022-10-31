package operations

import (
"openapi/pkg/models/shared")

type ListHandshakesForOrganizationQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type ListHandshakesForOrganizationXAmzTargetEnum string

const (
    ListHandshakesForOrganizationXAmzTargetEnumAwsOrganizationsV20161128ListHandshakesForOrganization ListHandshakesForOrganizationXAmzTargetEnum = "AWSOrganizationsV20161128.ListHandshakesForOrganization"
)


type ListHandshakesForOrganizationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListHandshakesForOrganizationXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListHandshakesForOrganizationRequest struct {
    QueryParams ListHandshakesForOrganizationQueryParams 
    Headers ListHandshakesForOrganizationHeaders 
    Request shared.ListHandshakesForOrganizationRequest `request:"mediaType=application/json"`
    
}

type ListHandshakesForOrganizationResponse struct {
    AwsOrganizationsNotInUseException *interface{} 
    AccessDeniedException *interface{} 
    ConcurrentModificationException *interface{} 
    ContentType string 
    InvalidInputException *interface{} 
    ListHandshakesForOrganizationResponse *shared.ListHandshakesForOrganizationResponse 
    ServiceException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

