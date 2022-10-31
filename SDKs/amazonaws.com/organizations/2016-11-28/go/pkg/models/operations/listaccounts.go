package operations

import (
"openapi/pkg/models/shared")

type ListAccountsQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type ListAccountsXAmzTargetEnum string

const (
    ListAccountsXAmzTargetEnumAwsOrganizationsV20161128ListAccounts ListAccountsXAmzTargetEnum = "AWSOrganizationsV20161128.ListAccounts"
)


type ListAccountsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListAccountsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListAccountsRequest struct {
    QueryParams ListAccountsQueryParams 
    Headers ListAccountsHeaders 
    Request shared.ListAccountsRequest `request:"mediaType=application/json"`
    
}

type ListAccountsResponse struct {
    AwsOrganizationsNotInUseException *interface{} 
    AccessDeniedException *interface{} 
    ContentType string 
    InvalidInputException *interface{} 
    ListAccountsResponse *shared.ListAccountsResponse 
    ServiceException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

