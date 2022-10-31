package operations

import (
"openapi/pkg/models/shared")

type ListAssociationsQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type ListAssociationsXAmzTargetEnum string

const (
    ListAssociationsXAmzTargetEnumAmazonSsmListAssociations ListAssociationsXAmzTargetEnum = "AmazonSSM.ListAssociations"
)


type ListAssociationsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListAssociationsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListAssociationsRequest struct {
    QueryParams ListAssociationsQueryParams 
    Headers ListAssociationsHeaders 
    Request shared.ListAssociationsRequest `request:"mediaType=application/json"`
    
}

type ListAssociationsResponse struct {
    ContentType string 
    InternalServerError *interface{} 
    InvalidNextToken *interface{} 
    ListAssociationsResult *shared.ListAssociationsResult 
    StatusCode int64 
    
}

