package operations

import (
	"openapi/pkg/models/shared"
)

type UndeprecateDomainXAmzTargetEnum string

const (
	UndeprecateDomainXAmzTargetEnumSimpleWorkflowServiceUndeprecateDomain UndeprecateDomainXAmzTargetEnum = "SimpleWorkflowService.UndeprecateDomain"
)

type UndeprecateDomainHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UndeprecateDomainXAmzTargetEnum `header:"name=X-Amz-Target"`
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
