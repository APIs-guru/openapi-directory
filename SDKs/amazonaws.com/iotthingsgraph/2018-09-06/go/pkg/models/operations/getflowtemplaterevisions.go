package operations

import (
"openapi/pkg/models/shared")

type GetFlowTemplateRevisionsQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
    
}


type GetFlowTemplateRevisionsXAmzTargetEnum string

const (
    GetFlowTemplateRevisionsXAmzTargetEnumIotThingsGraphFrontEndServiceGetFlowTemplateRevisions GetFlowTemplateRevisionsXAmzTargetEnum = "IotThingsGraphFrontEndService.GetFlowTemplateRevisions"
)


type GetFlowTemplateRevisionsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetFlowTemplateRevisionsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetFlowTemplateRevisionsRequest struct {
    QueryParams GetFlowTemplateRevisionsQueryParams 
    Headers GetFlowTemplateRevisionsHeaders 
    Request shared.GetFlowTemplateRevisionsRequest `request:"mediaType=application/json"`
    
}

type GetFlowTemplateRevisionsResponse struct {
    ContentType string 
    GetFlowTemplateRevisionsResponse *shared.GetFlowTemplateRevisionsResponse 
    InternalFailureException *interface{} 
    InvalidRequestException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

