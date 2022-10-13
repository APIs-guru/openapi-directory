package operations

import (
	"openapi/pkg/models/shared"
)

type DeprecateDomainXAmzTargetEnum string

const (
	DeprecateDomainXAmzTargetEnumSimpleWorkflowServiceDeprecateDomain DeprecateDomainXAmzTargetEnum = "SimpleWorkflowService.DeprecateDomain"
)

type DeprecateDomainHeaders struct {
	XAmzAlgorithm     *string                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeprecateDomainXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeprecateDomainRequest struct {
	Headers DeprecateDomainHeaders
	Request shared.DeprecateDomainInput `request:"mediaType=application/json"`
}

type DeprecateDomainResponse struct {
	ContentType                string
	DomainDeprecatedFault      *interface{}
	OperationNotPermittedFault *interface{}
	StatusCode                 int64
	UnknownResourceFault       *interface{}
}
