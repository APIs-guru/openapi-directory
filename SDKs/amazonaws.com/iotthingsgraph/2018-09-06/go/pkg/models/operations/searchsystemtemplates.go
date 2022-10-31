package operations

import (
"openapi/pkg/models/shared")

type SearchSystemTemplatesQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
    
}


type SearchSystemTemplatesXAmzTargetEnum string

const (
    SearchSystemTemplatesXAmzTargetEnumIotThingsGraphFrontEndServiceSearchSystemTemplates SearchSystemTemplatesXAmzTargetEnum = "IotThingsGraphFrontEndService.SearchSystemTemplates"
)


type SearchSystemTemplatesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget SearchSystemTemplatesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type SearchSystemTemplatesRequest struct {
    QueryParams SearchSystemTemplatesQueryParams 
    Headers SearchSystemTemplatesHeaders 
    Request shared.SearchSystemTemplatesRequest `request:"mediaType=application/json"`
    
}

type SearchSystemTemplatesResponse struct {
    ContentType string 
    InternalFailureException *interface{} 
    InvalidRequestException *interface{} 
    SearchSystemTemplatesResponse *shared.SearchSystemTemplatesResponse 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

