package operations

import (
"openapi/pkg/models/shared")

type ListProtectionsQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type ListProtectionsXAmzTargetEnum string

const (
    ListProtectionsXAmzTargetEnumAwsShield20160616ListProtections ListProtectionsXAmzTargetEnum = "AWSShield_20160616.ListProtections"
)


type ListProtectionsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListProtectionsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListProtectionsRequest struct {
    QueryParams ListProtectionsQueryParams 
    Headers ListProtectionsHeaders 
    Request shared.ListProtectionsRequest `request:"mediaType=application/json"`
    
}

type ListProtectionsResponse struct {
    ContentType string 
    InternalErrorException *interface{} 
    InvalidPaginationTokenException *interface{} 
    ListProtectionsResponse *shared.ListProtectionsResponse 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

