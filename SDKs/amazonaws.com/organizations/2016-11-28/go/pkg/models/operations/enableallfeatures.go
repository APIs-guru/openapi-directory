package operations

import (
	"openapi/pkg/models/shared"
)

type EnableAllFeaturesXAmzTargetEnum string

const (
	EnableAllFeaturesXAmzTargetEnumAwsOrganizationsV20161128EnableAllFeatures EnableAllFeaturesXAmzTargetEnum = "AWSOrganizationsV20161128.EnableAllFeatures"
)

type EnableAllFeaturesHeaders struct {
	XAmzAlgorithm     *string                         `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        EnableAllFeaturesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type EnableAllFeaturesRequest struct {
	Headers EnableAllFeaturesHeaders
	Request map[string]interface{} `request:"mediaType=application/json"`
}

type EnableAllFeaturesResponse struct {
	AwsOrganizationsNotInUseException     *interface{}
	AccessDeniedException                 *interface{}
	ConcurrentModificationException       *interface{}
	ContentType                           string
	EnableAllFeaturesResponse             *shared.EnableAllFeaturesResponse
	HandshakeConstraintViolationException *interface{}
	InvalidInputException                 *interface{}
	ServiceException                      *interface{}
	StatusCode                            int64
	TooManyRequestsException              *interface{}
}
