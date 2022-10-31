package operations

import (
	"openapi/pkg/models/shared"
)

type RebootInstanceXAmzTargetEnum string

const (
	RebootInstanceXAmzTargetEnumOpsWorks20130218RebootInstance RebootInstanceXAmzTargetEnum = "OpsWorks_20130218.RebootInstance"
)

type RebootInstanceHeaders struct {
	XAmzAlgorithm     *string                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        RebootInstanceXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type RebootInstanceRequest struct {
	Headers RebootInstanceHeaders
	Request shared.RebootInstanceRequest `request:"mediaType=application/json"`
}

type RebootInstanceResponse struct {
	ContentType               string
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ValidationException       *interface{}
}
