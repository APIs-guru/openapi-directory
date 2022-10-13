package operations

import (
	"openapi/pkg/models/shared"
)

type CreateStackXAmzTargetEnum string

const (
	CreateStackXAmzTargetEnumOpsWorks20130218CreateStack CreateStackXAmzTargetEnum = "OpsWorks_20130218.CreateStack"
)

type CreateStackHeaders struct {
	XAmzAlgorithm     *string                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateStackXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateStackRequest struct {
	Headers CreateStackHeaders
	Request shared.CreateStackRequest `request:"mediaType=application/json"`
}

type CreateStackResponse struct {
	ContentType         string
	CreateStackResult   *shared.CreateStackResult
	StatusCode          int64
	ValidationException *interface{}
}
