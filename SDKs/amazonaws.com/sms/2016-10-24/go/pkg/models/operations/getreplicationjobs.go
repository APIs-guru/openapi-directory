package operations

import (
"openapi/pkg/models/shared")

type GetReplicationJobsQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
    
}


type GetReplicationJobsXAmzTargetEnum string

const (
    GetReplicationJobsXAmzTargetEnumAwsServerMigrationServiceV20161024GetReplicationJobs GetReplicationJobsXAmzTargetEnum = "AWSServerMigrationService_V2016_10_24.GetReplicationJobs"
)


type GetReplicationJobsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetReplicationJobsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetReplicationJobsRequest struct {
    QueryParams GetReplicationJobsQueryParams 
    Headers GetReplicationJobsHeaders 
    Request shared.GetReplicationJobsRequest `request:"mediaType=application/json"`
    
}

type GetReplicationJobsResponse struct {
    ContentType string 
    GetReplicationJobsResponse *shared.GetReplicationJobsResponse 
    InvalidParameterException *interface{} 
    MissingRequiredParameterException *interface{} 
    StatusCode int64 
    UnauthorizedOperationException *interface{} 
    
}

