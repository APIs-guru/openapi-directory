package operations

import (
"openapi/pkg/models/shared")


type DescribeNodeAssociationStatusXAmzTargetEnum string

const (
    DescribeNodeAssociationStatusXAmzTargetEnumOpsWorksCmV20161101DescribeNodeAssociationStatus DescribeNodeAssociationStatusXAmzTargetEnum = "OpsWorksCM_V2016_11_01.DescribeNodeAssociationStatus"
)


type DescribeNodeAssociationStatusHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeNodeAssociationStatusXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeNodeAssociationStatusRequest struct {
    Headers DescribeNodeAssociationStatusHeaders 
    Request shared.DescribeNodeAssociationStatusRequest `request:"mediaType=application/json"`
    
}

type DescribeNodeAssociationStatusResponse struct {
    ContentType string 
    DescribeNodeAssociationStatusResponse *shared.DescribeNodeAssociationStatusResponse 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ValidationException *interface{} 
    
}

