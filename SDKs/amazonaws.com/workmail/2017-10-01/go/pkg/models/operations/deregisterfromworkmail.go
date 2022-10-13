package operations

import (
	"openapi/pkg/models/shared"
)

type DeregisterFromWorkMailXAmzTargetEnum string

const (
	DeregisterFromWorkMailXAmzTargetEnumWorkMailServiceDeregisterFromWorkMail DeregisterFromWorkMailXAmzTargetEnum = "WorkMailService.DeregisterFromWorkMail"
)

type DeregisterFromWorkMailHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeregisterFromWorkMailXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeregisterFromWorkMailRequest struct {
	Headers DeregisterFromWorkMailHeaders
	Request shared.DeregisterFromWorkMailRequest `request:"mediaType=application/json"`
}

type DeregisterFromWorkMailResponse struct {
	ContentType                    string
	DeregisterFromWorkMailResponse map[string]interface{}
	EntityNotFoundException        *interface{}
	EntityStateException           *interface{}
	InvalidParameterException      *interface{}
	OrganizationNotFoundException  *interface{}
	OrganizationStateException     *interface{}
	StatusCode                     int64
}
