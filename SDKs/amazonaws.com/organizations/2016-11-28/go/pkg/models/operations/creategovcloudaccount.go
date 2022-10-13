package operations

import (
	"openapi/pkg/models/shared"
)

type CreateGovCloudAccountXAmzTargetEnum string

const (
	CreateGovCloudAccountXAmzTargetEnumAwsOrganizationsV20161128CreateGovCloudAccount CreateGovCloudAccountXAmzTargetEnum = "AWSOrganizationsV20161128.CreateGovCloudAccount"
)

type CreateGovCloudAccountHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateGovCloudAccountXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateGovCloudAccountRequest struct {
	Headers CreateGovCloudAccountHeaders
	Request shared.CreateGovCloudAccountRequest `request:"mediaType=application/json"`
}

type CreateGovCloudAccountResponse struct {
	AwsOrganizationsNotInUseException *interface{}
	AccessDeniedException             *interface{}
	ConcurrentModificationException   *interface{}
	ConstraintViolationException      *interface{}
	ContentType                       string
	CreateGovCloudAccountResponse     *shared.CreateGovCloudAccountResponse
	FinalizingOrganizationException   *interface{}
	InvalidInputException             *interface{}
	ServiceException                  *interface{}
	StatusCode                        int64
	TooManyRequestsException          *interface{}
	UnsupportedAPIEndpointException   *interface{}
}
