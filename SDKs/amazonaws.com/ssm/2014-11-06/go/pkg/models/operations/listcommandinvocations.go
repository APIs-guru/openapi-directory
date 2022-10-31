package operations

import (
"openapi/pkg/models/shared")

type ListCommandInvocationsQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type ListCommandInvocationsXAmzTargetEnum string

const (
    ListCommandInvocationsXAmzTargetEnumAmazonSsmListCommandInvocations ListCommandInvocationsXAmzTargetEnum = "AmazonSSM.ListCommandInvocations"
)


type ListCommandInvocationsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListCommandInvocationsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListCommandInvocationsRequest struct {
    QueryParams ListCommandInvocationsQueryParams 
    Headers ListCommandInvocationsHeaders 
    Request shared.ListCommandInvocationsRequest `request:"mediaType=application/json"`
    
}

type ListCommandInvocationsResponse struct {
    ContentType string 
    InternalServerError *interface{} 
    InvalidCommandID *interface{} 
    InvalidFilterKey *interface{} 
    InvalidInstanceID *interface{} 
    InvalidNextToken *interface{} 
    ListCommandInvocationsResult *shared.ListCommandInvocationsResult 
    StatusCode int64 
    
}

