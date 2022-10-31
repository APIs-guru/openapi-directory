package operations

import (
"openapi/pkg/models/shared")

type ListWorkersWithQualificationTypeQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type ListWorkersWithQualificationTypeXAmzTargetEnum string

const (
    ListWorkersWithQualificationTypeXAmzTargetEnumMTurkRequesterServiceV20170117ListWorkersWithQualificationType ListWorkersWithQualificationTypeXAmzTargetEnum = "MTurkRequesterServiceV20170117.ListWorkersWithQualificationType"
)


type ListWorkersWithQualificationTypeHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListWorkersWithQualificationTypeXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListWorkersWithQualificationTypeRequest struct {
    QueryParams ListWorkersWithQualificationTypeQueryParams 
    Headers ListWorkersWithQualificationTypeHeaders 
    Request shared.ListWorkersWithQualificationTypeRequest `request:"mediaType=application/json"`
    
}

type ListWorkersWithQualificationTypeResponse struct {
    ContentType string 
    ListWorkersWithQualificationTypeResponse *shared.ListWorkersWithQualificationTypeResponse 
    RequestError *interface{} 
    ServiceFault *interface{} 
    StatusCode int64 
    
}

