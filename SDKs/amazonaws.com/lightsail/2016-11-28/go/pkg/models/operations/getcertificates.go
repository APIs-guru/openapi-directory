package operations

import (
	"openapi/pkg/models/shared"
)

type GetCertificatesXAmzTargetEnum string

const (
	GetCertificatesXAmzTargetEnumLightsail20161128GetCertificates GetCertificatesXAmzTargetEnum = "Lightsail_20161128.GetCertificates"
)

type GetCertificatesHeaders struct {
	XAmzAlgorithm     *string                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetCertificatesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetCertificatesRequest struct {
	Headers GetCertificatesHeaders
	Request shared.GetCertificatesRequest `request:"mediaType=application/json"`
}

type GetCertificatesResponse struct {
	AccessDeniedException    *interface{}
	ContentType              string
	GetCertificatesResult    *shared.GetCertificatesResult
	InvalidInputException    *interface{}
	NotFoundException        *interface{}
	ServiceException         *interface{}
	StatusCode               int64
	UnauthenticatedException *interface{}
}
