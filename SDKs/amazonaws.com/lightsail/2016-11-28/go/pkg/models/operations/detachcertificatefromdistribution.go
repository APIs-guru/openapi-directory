package operations

import (
	"openapi/pkg/models/shared"
)

type DetachCertificateFromDistributionXAmzTargetEnum string

const (
	DetachCertificateFromDistributionXAmzTargetEnumLightsail20161128DetachCertificateFromDistribution DetachCertificateFromDistributionXAmzTargetEnum = "Lightsail_20161128.DetachCertificateFromDistribution"
)

type DetachCertificateFromDistributionHeaders struct {
	XAmzAlgorithm     *string                                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DetachCertificateFromDistributionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DetachCertificateFromDistributionRequest struct {
	Headers DetachCertificateFromDistributionHeaders
	Request shared.DetachCertificateFromDistributionRequest `request:"mediaType=application/json"`
}

type DetachCertificateFromDistributionResponse struct {
	AccessDeniedException                   *interface{}
	ContentType                             string
	DetachCertificateFromDistributionResult *shared.DetachCertificateFromDistributionResult
	InvalidInputException                   *interface{}
	NotFoundException                       *interface{}
	OperationFailureException               *interface{}
	ServiceException                        *interface{}
	StatusCode                              int64
	UnauthenticatedException                *interface{}
}
