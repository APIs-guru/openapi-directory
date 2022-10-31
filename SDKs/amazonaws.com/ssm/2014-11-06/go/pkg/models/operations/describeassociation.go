package operations

import (
"openapi/pkg/models/shared")


type DescribeAssociationXAmzTargetEnum string

const (
    DescribeAssociationXAmzTargetEnumAmazonSsmDescribeAssociation DescribeAssociationXAmzTargetEnum = "AmazonSSM.DescribeAssociation"
)


type DescribeAssociationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeAssociationXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeAssociationRequest struct {
    Headers DescribeAssociationHeaders 
    Request shared.DescribeAssociationRequest `request:"mediaType=application/json"`
    
}

type DescribeAssociationResponse struct {
    AssociationDoesNotExist *interface{} 
    ContentType string 
    DescribeAssociationResult *shared.DescribeAssociationResult 
    InternalServerError *interface{} 
    InvalidAssociationVersion *interface{} 
    InvalidDocument *interface{} 
    InvalidInstanceID *interface{} 
    StatusCode int64 
    
}

