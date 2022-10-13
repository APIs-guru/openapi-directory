package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeEngagementXAmzTargetEnum string

const (
	DescribeEngagementXAmzTargetEnumSsmContactsDescribeEngagement DescribeEngagementXAmzTargetEnum = "SSMContacts.DescribeEngagement"
)

type DescribeEngagementHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeEngagementXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeEngagementRequest struct {
	Headers DescribeEngagementHeaders
	Request shared.DescribeEngagementRequest `request:"mediaType=application/json"`
}

type DescribeEngagementResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	DataEncryptionException   *interface{}
	DescribeEngagementResult  *shared.DescribeEngagementResult
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}
