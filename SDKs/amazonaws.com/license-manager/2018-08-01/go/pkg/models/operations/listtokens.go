package operations

import (
	"openapi/pkg/models/shared"
)

type ListTokensXAmzTargetEnum string

const (
	ListTokensXAmzTargetEnumAwsLicenseManagerListTokens ListTokensXAmzTargetEnum = "AWSLicenseManager.ListTokens"
)

type ListTokensHeaders struct {
	XAmzAlgorithm     *string                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListTokensXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListTokensRequest struct {
	Headers ListTokensHeaders
	Request shared.ListTokensRequest `request:"mediaType=application/json"`
}

type ListTokensResponse struct {
	AccessDeniedException      *interface{}
	AuthorizationException     *interface{}
	ContentType                string
	ListTokensResponse         *shared.ListTokensResponse
	RateLimitExceededException *interface{}
	ServerInternalException    *interface{}
	StatusCode                 int64
	ValidationException        *interface{}
}
