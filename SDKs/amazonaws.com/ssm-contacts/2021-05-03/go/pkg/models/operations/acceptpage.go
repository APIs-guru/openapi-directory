package operations

import (
	"openapi/pkg/models/shared"
)

type AcceptPageXAmzTargetEnum string

const (
	AcceptPageXAmzTargetEnumSsmContactsAcceptPage AcceptPageXAmzTargetEnum = "SSMContacts.AcceptPage"
)

type AcceptPageHeaders struct {
	XAmzAlgorithm     *string                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        AcceptPageXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type AcceptPageRequest struct {
	Headers AcceptPageHeaders
	Request shared.AcceptPageRequest `request:"mediaType=application/json"`
}

type AcceptPageResponse struct {
	AcceptPageResult          map[string]interface{}
	AccessDeniedException     *interface{}
	ContentType               string
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}
