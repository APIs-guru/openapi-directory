package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeCustomKeyStoresXAmzTargetEnum string

const (
	DescribeCustomKeyStoresXAmzTargetEnumTrentServiceDescribeCustomKeyStores DescribeCustomKeyStoresXAmzTargetEnum = "TrentService.DescribeCustomKeyStores"
)

type DescribeCustomKeyStoresHeaders struct {
	XAmzAlgorithm     *string                               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeCustomKeyStoresXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeCustomKeyStoresRequest struct {
	Headers DescribeCustomKeyStoresHeaders
	Request shared.DescribeCustomKeyStoresRequest `request:"mediaType=application/json"`
}

type DescribeCustomKeyStoresResponse struct {
	ContentType                     string
	CustomKeyStoreNotFoundException *interface{}
	DescribeCustomKeyStoresResponse *shared.DescribeCustomKeyStoresResponse
	InvalidMarkerException          *interface{}
	KmsInternalException            *interface{}
	StatusCode                      int64
}
