package operations

import (
	"openapi/pkg/models/shared"
)

type CreateCertificateXAmzTargetEnum string

const (
	CreateCertificateXAmzTargetEnumLightsail20161128CreateCertificate CreateCertificateXAmzTargetEnum = "Lightsail_20161128.CreateCertificate"
)

type CreateCertificateHeaders struct {
	XAmzAlgorithm     *string                         `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateCertificateXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type CreateCertificateRequest struct {
	Headers CreateCertificateHeaders
	Request shared.CreateCertificateRequest `request:"mediaType=application/json"`
}

type CreateCertificateResponse struct {
	AccessDeniedException    *interface{}
	ContentType              string
	CreateCertificateResult  *shared.CreateCertificateResult
	InvalidInputException    *interface{}
	NotFoundException        *interface{}
	ServiceException         *interface{}
	StatusCode               int64
	UnauthenticatedException *interface{}
}
