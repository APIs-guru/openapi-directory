package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeMyUserProfileXAmzTargetEnum string

const (
	DescribeMyUserProfileXAmzTargetEnumOpsWorks20130218DescribeMyUserProfile DescribeMyUserProfileXAmzTargetEnum = "OpsWorks_20130218.DescribeMyUserProfile"
)

type DescribeMyUserProfileHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeMyUserProfileXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeMyUserProfileRequest struct {
	Headers DescribeMyUserProfileHeaders
}

type DescribeMyUserProfileResponse struct {
	ContentType                 string
	DescribeMyUserProfileResult *shared.DescribeMyUserProfileResult
	StatusCode                  int64
}
