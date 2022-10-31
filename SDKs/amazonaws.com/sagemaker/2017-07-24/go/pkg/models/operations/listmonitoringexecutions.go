package operations

import (
"openapi/pkg/models/shared")

type ListMonitoringExecutionsQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type ListMonitoringExecutionsXAmzTargetEnum string

const (
    ListMonitoringExecutionsXAmzTargetEnumSageMakerListMonitoringExecutions ListMonitoringExecutionsXAmzTargetEnum = "SageMaker.ListMonitoringExecutions"
)


type ListMonitoringExecutionsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListMonitoringExecutionsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListMonitoringExecutionsRequest struct {
    QueryParams ListMonitoringExecutionsQueryParams 
    Headers ListMonitoringExecutionsHeaders 
    Request shared.ListMonitoringExecutionsRequest `request:"mediaType=application/json"`
    
}

type ListMonitoringExecutionsResponse struct {
    ContentType string 
    ListMonitoringExecutionsResponse *shared.ListMonitoringExecutionsResponse 
    StatusCode int64 
    
}

