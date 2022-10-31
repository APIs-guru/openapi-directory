package operations

import (
"openapi/pkg/models/shared")


type DeprecateDomainXAmzTargetEnum string

const (
    DeprecateDomainXAmzTargetEnumSimpleWorkflowServiceDeprecateDomain DeprecateDomainXAmzTargetEnum = "SimpleWorkflowService.DeprecateDomain"
)


type DeprecateDomainHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeprecateDomainXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeprecateDomainRequest struct {
    Headers DeprecateDomainHeaders 
    Request shared.DeprecateDomainInput `request:"mediaType=application/json"`
    
}

type DeprecateDomainResponse struct {
    ContentType string 
    DomainDeprecatedFault *interface{} 
    OperationNotPermittedFault *interface{} 
    StatusCode int64 
    UnknownResourceFault *interface{} 
    
}

