package operations

import (
"openapi/pkg/models/shared")

type ListOrganizationsQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type ListOrganizationsXAmzTargetEnum string

const (
    ListOrganizationsXAmzTargetEnumWorkMailServiceListOrganizations ListOrganizationsXAmzTargetEnum = "WorkMailService.ListOrganizations"
)


type ListOrganizationsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListOrganizationsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListOrganizationsRequest struct {
    QueryParams ListOrganizationsQueryParams 
    Headers ListOrganizationsHeaders 
    Request shared.ListOrganizationsRequest `request:"mediaType=application/json"`
    
}

type ListOrganizationsResponse struct {
    ContentType string 
    InvalidParameterException *interface{} 
    ListOrganizationsResponse *shared.ListOrganizationsResponse 
    StatusCode int64 
    
}

