package operations

import (
"openapi/pkg/models/shared")

type ListDocumentVersionsQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type ListDocumentVersionsXAmzTargetEnum string

const (
    ListDocumentVersionsXAmzTargetEnumAmazonSsmListDocumentVersions ListDocumentVersionsXAmzTargetEnum = "AmazonSSM.ListDocumentVersions"
)


type ListDocumentVersionsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListDocumentVersionsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListDocumentVersionsRequest struct {
    QueryParams ListDocumentVersionsQueryParams 
    Headers ListDocumentVersionsHeaders 
    Request shared.ListDocumentVersionsRequest `request:"mediaType=application/json"`
    
}

type ListDocumentVersionsResponse struct {
    ContentType string 
    InternalServerError *interface{} 
    InvalidDocument *interface{} 
    InvalidNextToken *interface{} 
    ListDocumentVersionsResult *shared.ListDocumentVersionsResult 
    StatusCode int64 
    
}

