package operations

import (
"openapi/pkg/models/shared")

type ListEventTrackersQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
    
}


type ListEventTrackersXAmzTargetEnum string

const (
    ListEventTrackersXAmzTargetEnumAmazonPersonalizeListEventTrackers ListEventTrackersXAmzTargetEnum = "AmazonPersonalize.ListEventTrackers"
)


type ListEventTrackersHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListEventTrackersXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListEventTrackersRequest struct {
    QueryParams ListEventTrackersQueryParams 
    Headers ListEventTrackersHeaders 
    Request shared.ListEventTrackersRequest `request:"mediaType=application/json"`
    
}

type ListEventTrackersResponse struct {
    ContentType string 
    InvalidInputException *interface{} 
    InvalidNextTokenException *interface{} 
    ListEventTrackersResponse *shared.ListEventTrackersResponse 
    StatusCode int64 
    
}

