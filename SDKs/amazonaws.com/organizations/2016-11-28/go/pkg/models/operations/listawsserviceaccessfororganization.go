package operations

import (
"openapi/pkg/models/shared")

type ListAwsServiceAccessForOrganizationQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type ListAwsServiceAccessForOrganizationXAmzTargetEnum string

const (
    ListAwsServiceAccessForOrganizationXAmzTargetEnumAwsOrganizationsV20161128ListAwsServiceAccessForOrganization ListAwsServiceAccessForOrganizationXAmzTargetEnum = "AWSOrganizationsV20161128.ListAWSServiceAccessForOrganization"
)


type ListAwsServiceAccessForOrganizationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListAwsServiceAccessForOrganizationXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListAwsServiceAccessForOrganizationRequest struct {
    QueryParams ListAwsServiceAccessForOrganizationQueryParams 
    Headers ListAwsServiceAccessForOrganizationHeaders 
    Request shared.ListAwsServiceAccessForOrganizationRequest `request:"mediaType=application/json"`
    
}

type ListAwsServiceAccessForOrganizationResponse struct {
    AwsOrganizationsNotInUseException *interface{} 
    AccessDeniedException *interface{} 
    ConstraintViolationException *interface{} 
    ContentType string 
    InvalidInputException *interface{} 
    ListAwsServiceAccessForOrganizationResponse *shared.ListAwsServiceAccessForOrganizationResponse 
    ServiceException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    UnsupportedAPIEndpointException *interface{} 
    
}

