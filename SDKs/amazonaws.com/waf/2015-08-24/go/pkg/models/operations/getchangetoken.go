package operations

import (
	"openapi/pkg/models/shared"
)

type GetChangeTokenXAmzTargetEnum string

const (
	GetChangeTokenXAmzTargetEnumAwswaf20150824GetChangeToken GetChangeTokenXAmzTargetEnum = "AWSWAF_20150824.GetChangeToken"
)

type GetChangeTokenHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetChangeTokenXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetChangeTokenRequest struct {
	Headers GetChangeTokenHeaders
	Request map[string]interface{} `request:"mediaType=application/json"`
}

type GetChangeTokenResponse struct {
	ContentType               string
	GetChangeTokenResponse    *shared.GetChangeTokenResponse
	StatusCode                int64
	WafInternalErrorException *interface{}
}
