package operations

import (
"openapi/pkg/models/shared")

type DescribeEffectiveInstanceAssociationsQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type DescribeEffectiveInstanceAssociationsXAmzTargetEnum string

const (
    DescribeEffectiveInstanceAssociationsXAmzTargetEnumAmazonSsmDescribeEffectiveInstanceAssociations DescribeEffectiveInstanceAssociationsXAmzTargetEnum = "AmazonSSM.DescribeEffectiveInstanceAssociations"
)


type DescribeEffectiveInstanceAssociationsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeEffectiveInstanceAssociationsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeEffectiveInstanceAssociationsRequest struct {
    QueryParams DescribeEffectiveInstanceAssociationsQueryParams 
    Headers DescribeEffectiveInstanceAssociationsHeaders 
    Request shared.DescribeEffectiveInstanceAssociationsRequest `request:"mediaType=application/json"`
    
}

type DescribeEffectiveInstanceAssociationsResponse struct {
    ContentType string 
    DescribeEffectiveInstanceAssociationsResult *shared.DescribeEffectiveInstanceAssociationsResult 
    InternalServerError *interface{} 
    InvalidInstanceID *interface{} 
    InvalidNextToken *interface{} 
    StatusCode int64 
    
}

