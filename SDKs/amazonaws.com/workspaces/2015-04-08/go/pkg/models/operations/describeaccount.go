package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeAccountXAmzTargetEnum string

const (
	DescribeAccountXAmzTargetEnumWorkspacesServiceDescribeAccount DescribeAccountXAmzTargetEnum = "WorkspacesService.DescribeAccount"
)

type DescribeAccountHeaders struct {
	XAmzAlgorithm     *string                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeAccountXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeAccountRequest struct {
	Headers DescribeAccountHeaders
	Request map[string]interface{} `request:"mediaType=application/json"`
}

type DescribeAccountResponse struct {
	AccessDeniedException *interface{}
	ContentType           string
	DescribeAccountResult *shared.DescribeAccountResult
	StatusCode            int64
}
