package operations

import (
	"openapi/pkg/models/shared"
)

type ListInventoryEntriesXAmzTargetEnum string

const (
	ListInventoryEntriesXAmzTargetEnumAmazonSsmListInventoryEntries ListInventoryEntriesXAmzTargetEnum = "AmazonSSM.ListInventoryEntries"
)

type ListInventoryEntriesHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListInventoryEntriesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListInventoryEntriesRequest struct {
	Headers ListInventoryEntriesHeaders
	Request shared.ListInventoryEntriesRequest `request:"mediaType=application/json"`
}

type ListInventoryEntriesResponse struct {
	ContentType                string
	InternalServerError        *interface{}
	InvalidFilter              *interface{}
	InvalidInstanceID          *interface{}
	InvalidNextToken           *interface{}
	InvalidTypeNameException   *interface{}
	ListInventoryEntriesResult *shared.ListInventoryEntriesResult
	StatusCode                 int64
}
