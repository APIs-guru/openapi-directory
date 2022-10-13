package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateDomainXAmzTargetEnum string

const (
	UpdateDomainXAmzTargetEnumSageMakerUpdateDomain UpdateDomainXAmzTargetEnum = "SageMaker.UpdateDomain"
)

type UpdateDomainHeaders struct {
	XAmzAlgorithm     *string                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateDomainXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateDomainRequest struct {
	Headers UpdateDomainHeaders
	Request shared.UpdateDomainRequest `request:"mediaType=application/json"`
}

type UpdateDomainResponse struct {
	ContentType           string
	ResourceInUse         *interface{}
	ResourceLimitExceeded *interface{}
	ResourceNotFound      *interface{}
	StatusCode            int64
	UpdateDomainResponse  *shared.UpdateDomainResponse
}
