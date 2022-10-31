package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeAppsXAmzTargetEnum string

const (
	DescribeAppsXAmzTargetEnumOpsWorks20130218DescribeApps DescribeAppsXAmzTargetEnum = "OpsWorks_20130218.DescribeApps"
)

type DescribeAppsHeaders struct {
	XAmzAlgorithm     *string                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeAppsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeAppsRequest struct {
	Headers DescribeAppsHeaders
	Request shared.DescribeAppsRequest `request:"mediaType=application/json"`
}

type DescribeAppsResponse struct {
	ContentType               string
	DescribeAppsResult        *shared.DescribeAppsResult
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ValidationException       *interface{}
}
