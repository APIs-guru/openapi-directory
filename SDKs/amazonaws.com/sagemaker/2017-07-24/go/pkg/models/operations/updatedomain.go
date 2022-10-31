package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateDomainXAmzTargetEnum string

const (
	UpdateDomainXAmzTargetEnumSageMakerUpdateDomain UpdateDomainXAmzTargetEnum = "SageMaker.UpdateDomain"
)

type UpdateDomainHeaders struct {
	XAmzAlgorithm     *string                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateDomainXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
