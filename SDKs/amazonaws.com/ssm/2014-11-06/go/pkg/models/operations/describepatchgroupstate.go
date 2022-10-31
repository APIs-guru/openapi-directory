package operations

import (
"openapi/pkg/models/shared")


type DescribePatchGroupStateXAmzTargetEnum string

const (
    DescribePatchGroupStateXAmzTargetEnumAmazonSsmDescribePatchGroupState DescribePatchGroupStateXAmzTargetEnum = "AmazonSSM.DescribePatchGroupState"
)


type DescribePatchGroupStateHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribePatchGroupStateXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribePatchGroupStateRequest struct {
    Headers DescribePatchGroupStateHeaders 
    Request shared.DescribePatchGroupStateRequest `request:"mediaType=application/json"`
    
}

type DescribePatchGroupStateResponse struct {
    ContentType string 
    DescribePatchGroupStateResult *shared.DescribePatchGroupStateResult 
    InternalServerError *interface{} 
    InvalidNextToken *interface{} 
    StatusCode int64 
    
}

