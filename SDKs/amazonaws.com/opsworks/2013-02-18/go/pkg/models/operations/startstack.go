package operations

import (
	"openapi/pkg/models/shared"
)

type StartStackXAmzTargetEnum string

const (
	StartStackXAmzTargetEnumOpsWorks20130218StartStack StartStackXAmzTargetEnum = "OpsWorks_20130218.StartStack"
)

type StartStackHeaders struct {
	XAmzAlgorithm     *string                  `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                  `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                  `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                  `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                  `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                  `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                  `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        StartStackXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type StartStackRequest struct {
	Headers StartStackHeaders
	Request shared.StartStackRequest `request:"mediaType=application/json"`
}

type StartStackResponse struct {
	ContentType               string
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ValidationException       *interface{}
}
