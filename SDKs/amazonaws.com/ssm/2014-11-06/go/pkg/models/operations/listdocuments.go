package operations

import (
"openapi/pkg/models/shared")

type ListDocumentsQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type ListDocumentsXAmzTargetEnum string

const (
    ListDocumentsXAmzTargetEnumAmazonSsmListDocuments ListDocumentsXAmzTargetEnum = "AmazonSSM.ListDocuments"
)


type ListDocumentsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListDocumentsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListDocumentsRequest struct {
    QueryParams ListDocumentsQueryParams 
    Headers ListDocumentsHeaders 
    Request shared.ListDocumentsRequest `request:"mediaType=application/json"`
    
}

type ListDocumentsResponse struct {
    ContentType string 
    InternalServerError *interface{} 
    InvalidFilterKey *interface{} 
    InvalidNextToken *interface{} 
    ListDocumentsResult *shared.ListDocumentsResult 
    StatusCode int64 
    
}

