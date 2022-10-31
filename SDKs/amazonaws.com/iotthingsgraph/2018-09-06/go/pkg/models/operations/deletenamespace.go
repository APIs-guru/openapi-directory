package operations

import (
"openapi/pkg/models/shared")


type DeleteNamespaceXAmzTargetEnum string

const (
    DeleteNamespaceXAmzTargetEnumIotThingsGraphFrontEndServiceDeleteNamespace DeleteNamespaceXAmzTargetEnum = "IotThingsGraphFrontEndService.DeleteNamespace"
)


type DeleteNamespaceHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteNamespaceXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteNamespaceRequest struct {
    Headers DeleteNamespaceHeaders 
    Request map[string]interface{} `request:"mediaType=application/json"`
    
}

type DeleteNamespaceResponse struct {
    ContentType string 
    DeleteNamespaceResponse *shared.DeleteNamespaceResponse 
    InternalFailureException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

