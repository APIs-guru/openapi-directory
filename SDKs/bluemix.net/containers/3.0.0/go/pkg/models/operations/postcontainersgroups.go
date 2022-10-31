package operations

import (
"openapi/pkg/models/shared")

type PostContainersGroupsHeaders struct {
    XAuthProjectID string `header:"style=simple,explode=false,name=X-Auth-Project-Id"`
    XAuthToken string `header:"style=simple,explode=false,name=X-Auth-Token"`
    
}

type PostContainersGroupsRequest struct {
    Headers PostContainersGroupsHeaders 
    Request interface{} `request:"mediaType=application/json"`
    
}

type PostContainersGroupsResponse struct {
    ContainersGroupsPostCreatedInfo *shared.ContainersGroupsPostCreatedInfo 
    ContentType string 
    StatusCode int64 
    
}

