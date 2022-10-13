package operations

import (
	"openapi/pkg/models/shared"
)

type DescribePageXAmzTargetEnum string

const (
	DescribePageXAmzTargetEnumSsmContactsDescribePage DescribePageXAmzTargetEnum = "SSMContacts.DescribePage"
)

type DescribePageHeaders struct {
	XAmzAlgorithm     *string                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribePageXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribePageRequest struct {
	Headers DescribePageHeaders
	Request shared.DescribePageRequest `request:"mediaType=application/json"`
}

type DescribePageResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	DataEncryptionException   *interface{}
	DescribePageResult        *shared.DescribePageResult
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}
