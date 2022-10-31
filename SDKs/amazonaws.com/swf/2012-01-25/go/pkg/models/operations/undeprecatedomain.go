package operations

import (
	"openapi/pkg/models/shared"
)

type UndeprecateDomainXAmzTargetEnum string

const (
	UndeprecateDomainXAmzTargetEnumSimpleWorkflowServiceUndeprecateDomain UndeprecateDomainXAmzTargetEnum = "SimpleWorkflowService.UndeprecateDomain"
)

type UndeprecateDomainHeaders struct {
	XAmzAlgorithm     *string                         `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UndeprecateDomainXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type UndeprecateDomainRequest struct {
	Headers UndeprecateDomainHeaders
	Request shared.UndeprecateDomainInput `request:"mediaType=application/json"`
}

type UndeprecateDomainResponse struct {
	ContentType                string
	DomainAlreadyExistsFault   *interface{}
	OperationNotPermittedFault *interface{}
	StatusCode                 int64
	UnknownResourceFault       *interface{}
}
