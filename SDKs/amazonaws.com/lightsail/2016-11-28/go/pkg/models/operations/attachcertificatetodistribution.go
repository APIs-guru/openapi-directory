package operations

import (
	"openapi/pkg/models/shared"
)

type AttachCertificateToDistributionXAmzTargetEnum string

const (
	AttachCertificateToDistributionXAmzTargetEnumLightsail20161128AttachCertificateToDistribution AttachCertificateToDistributionXAmzTargetEnum = "Lightsail_20161128.AttachCertificateToDistribution"
)

type AttachCertificateToDistributionHeaders struct {
	XAmzAlgorithm     *string                                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        AttachCertificateToDistributionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type AttachCertificateToDistributionRequest struct {
	Headers AttachCertificateToDistributionHeaders
	Request shared.AttachCertificateToDistributionRequest `request:"mediaType=application/json"`
}

type AttachCertificateToDistributionResponse struct {
	AccessDeniedException                 *interface{}
	AttachCertificateToDistributionResult *shared.AttachCertificateToDistributionResult
	ContentType                           string
	InvalidInputException                 *interface{}
	NotFoundException                     *interface{}
	OperationFailureException             *interface{}
	ServiceException                      *interface{}
	StatusCode                            int64
	UnauthenticatedException              *interface{}
}
