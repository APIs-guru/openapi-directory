package operations

import (
"openapi/pkg/models/shared")

type GetSystemTemplateRevisionsQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
    
}


type GetSystemTemplateRevisionsXAmzTargetEnum string

const (
    GetSystemTemplateRevisionsXAmzTargetEnumIotThingsGraphFrontEndServiceGetSystemTemplateRevisions GetSystemTemplateRevisionsXAmzTargetEnum = "IotThingsGraphFrontEndService.GetSystemTemplateRevisions"
)


type GetSystemTemplateRevisionsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetSystemTemplateRevisionsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetSystemTemplateRevisionsRequest struct {
    QueryParams GetSystemTemplateRevisionsQueryParams 
    Headers GetSystemTemplateRevisionsHeaders 
    Request shared.GetSystemTemplateRevisionsRequest `request:"mediaType=application/json"`
    
}

type GetSystemTemplateRevisionsResponse struct {
    ContentType string 
    GetSystemTemplateRevisionsResponse *shared.GetSystemTemplateRevisionsResponse 
    InternalFailureException *interface{} 
    InvalidRequestException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

