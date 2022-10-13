package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeAccountModificationsXAmzTargetEnum string

const (
	DescribeAccountModificationsXAmzTargetEnumWorkspacesServiceDescribeAccountModifications DescribeAccountModificationsXAmzTargetEnum = "WorkspacesService.DescribeAccountModifications"
)

type DescribeAccountModificationsHeaders struct {
	XAmzAlgorithm     *string                                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeAccountModificationsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeAccountModificationsRequest struct {
	Headers DescribeAccountModificationsHeaders
	Request shared.DescribeAccountModificationsRequest `request:"mediaType=application/json"`
}

type DescribeAccountModificationsResponse struct {
	AccessDeniedException              *interface{}
	ContentType                        string
	DescribeAccountModificationsResult *shared.DescribeAccountModificationsResult
	StatusCode                         int64
}
