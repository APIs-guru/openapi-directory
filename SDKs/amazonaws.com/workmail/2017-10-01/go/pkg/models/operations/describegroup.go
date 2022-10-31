package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeGroupXAmzTargetEnum string

const (
	DescribeGroupXAmzTargetEnumWorkMailServiceDescribeGroup DescribeGroupXAmzTargetEnum = "WorkMailService.DescribeGroup"
)

type DescribeGroupHeaders struct {
	XAmzAlgorithm     *string                     `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeGroupXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeGroupRequest struct {
	Headers DescribeGroupHeaders
	Request shared.DescribeGroupRequest `request:"mediaType=application/json"`
}

type DescribeGroupResponse struct {
	ContentType                   string
	DescribeGroupResponse         *shared.DescribeGroupResponse
	EntityNotFoundException       *interface{}
	InvalidParameterException     *interface{}
	OrganizationNotFoundException *interface{}
	OrganizationStateException    *interface{}
	StatusCode                    int64
}
