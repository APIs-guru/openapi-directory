package operations

import (
"openapi/pkg/models/shared")

type ListRobotApplicationsQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
    
}

type ListRobotApplicationsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type ListRobotApplicationsRequestBody struct {
    Filters []shared.Filter `json:"filters,omitempty"`
    MaxResults *int64 `json:"maxResults,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    VersionQualifier *string `json:"versionQualifier,omitempty"`
    
}

type ListRobotApplicationsRequest struct {
    QueryParams ListRobotApplicationsQueryParams 
    Headers ListRobotApplicationsHeaders 
    Request ListRobotApplicationsRequestBody `request:"mediaType=application/json"`
    
}

type ListRobotApplicationsResponse struct {
    ContentType string 
    InternalServerException *interface{} 
    InvalidParameterException *interface{} 
    ListRobotApplicationsResponse *shared.ListRobotApplicationsResponse 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

