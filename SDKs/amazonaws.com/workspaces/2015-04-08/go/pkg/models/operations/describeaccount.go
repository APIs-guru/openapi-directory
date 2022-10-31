package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeAccountXAmzTargetEnum string

const (
	DescribeAccountXAmzTargetEnumWorkspacesServiceDescribeAccount DescribeAccountXAmzTargetEnum = "WorkspacesService.DescribeAccount"
)

type DescribeAccountHeaders struct {
	XAmzAlgorithm     *string                       `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeAccountXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
