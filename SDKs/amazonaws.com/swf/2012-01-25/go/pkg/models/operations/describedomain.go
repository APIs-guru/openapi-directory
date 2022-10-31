package operations

import (
"openapi/pkg/models/shared")


type DescribeDomainXAmzTargetEnum string

const (
    DescribeDomainXAmzTargetEnumSimpleWorkflowServiceDescribeDomain DescribeDomainXAmzTargetEnum = "SimpleWorkflowService.DescribeDomain"
)


type DescribeDomainHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeDomainXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeDomainRequest struct {
    Headers DescribeDomainHeaders 
    Request shared.DescribeDomainInput `request:"mediaType=application/json"`
    
}

type DescribeDomainResponse struct {
    ContentType string 
    DomainDetail *shared.DomainDetail 
    OperationNotPermittedFault *interface{} 
    StatusCode int64 
    UnknownResourceFault *interface{} 
    
}

