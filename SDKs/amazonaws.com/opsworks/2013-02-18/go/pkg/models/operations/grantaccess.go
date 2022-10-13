package operations

import (
	"openapi/pkg/models/shared"
)

type GrantAccessXAmzTargetEnum string

const (
	GrantAccessXAmzTargetEnumOpsWorks20130218GrantAccess GrantAccessXAmzTargetEnum = "OpsWorks_20130218.GrantAccess"
)

type GrantAccessHeaders struct {
	XAmzAlgorithm     *string                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GrantAccessXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GrantAccessRequest struct {
	Headers GrantAccessHeaders
	Request shared.GrantAccessRequest `request:"mediaType=application/json"`
}

type GrantAccessResponse struct {
	ContentType               string
	GrantAccessResult         *shared.GrantAccessResult
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ValidationException       *interface{}
}
