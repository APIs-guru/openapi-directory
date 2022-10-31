package operations

import (
"openapi/pkg/models/shared")


type DeleteParametersXAmzTargetEnum string

const (
    DeleteParametersXAmzTargetEnumAmazonSsmDeleteParameters DeleteParametersXAmzTargetEnum = "AmazonSSM.DeleteParameters"
)


type DeleteParametersHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteParametersXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteParametersRequest struct {
    Headers DeleteParametersHeaders 
    Request shared.DeleteParametersRequest `request:"mediaType=application/json"`
    
}

type DeleteParametersResponse struct {
    ContentType string 
    DeleteParametersResult *shared.DeleteParametersResult 
    InternalServerError *interface{} 
    StatusCode int64 
    
}

