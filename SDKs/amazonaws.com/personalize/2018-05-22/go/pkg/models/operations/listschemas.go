package operations

import (
"openapi/pkg/models/shared")

type ListSchemasQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
    
}


type ListSchemasXAmzTargetEnum string

const (
    ListSchemasXAmzTargetEnumAmazonPersonalizeListSchemas ListSchemasXAmzTargetEnum = "AmazonPersonalize.ListSchemas"
)


type ListSchemasHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListSchemasXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListSchemasRequest struct {
    QueryParams ListSchemasQueryParams 
    Headers ListSchemasHeaders 
    Request shared.ListSchemasRequest `request:"mediaType=application/json"`
    
}

type ListSchemasResponse struct {
    ContentType string 
    InvalidNextTokenException *interface{} 
    ListSchemasResponse *shared.ListSchemasResponse 
    StatusCode int64 
    
}

