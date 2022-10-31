package operations

import (
"openapi/pkg/models/shared")

type DescribeAssociationExecutionsQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type DescribeAssociationExecutionsXAmzTargetEnum string

const (
    DescribeAssociationExecutionsXAmzTargetEnumAmazonSsmDescribeAssociationExecutions DescribeAssociationExecutionsXAmzTargetEnum = "AmazonSSM.DescribeAssociationExecutions"
)


type DescribeAssociationExecutionsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeAssociationExecutionsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeAssociationExecutionsRequest struct {
    QueryParams DescribeAssociationExecutionsQueryParams 
    Headers DescribeAssociationExecutionsHeaders 
    Request shared.DescribeAssociationExecutionsRequest `request:"mediaType=application/json"`
    
}

type DescribeAssociationExecutionsResponse struct {
    AssociationDoesNotExist *interface{} 
    ContentType string 
    DescribeAssociationExecutionsResult *shared.DescribeAssociationExecutionsResult 
    InternalServerError *interface{} 
    InvalidNextToken *interface{} 
    StatusCode int64 
    
}

