package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeUserProfilesXAmzTargetEnum string

const (
	DescribeUserProfilesXAmzTargetEnumOpsWorks20130218DescribeUserProfiles DescribeUserProfilesXAmzTargetEnum = "OpsWorks_20130218.DescribeUserProfiles"
)

type DescribeUserProfilesHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeUserProfilesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeUserProfilesRequest struct {
	Headers DescribeUserProfilesHeaders
	Request shared.DescribeUserProfilesRequest `request:"mediaType=application/json"`
}

type DescribeUserProfilesResponse struct {
	ContentType                string
	DescribeUserProfilesResult *shared.DescribeUserProfilesResult
	ResourceNotFoundException  *interface{}
	StatusCode                 int64
	ValidationException        *interface{}
}
