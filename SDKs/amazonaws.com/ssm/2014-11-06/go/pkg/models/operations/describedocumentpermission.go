package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeDocumentPermissionXAmzTargetEnum string

const (
	DescribeDocumentPermissionXAmzTargetEnumAmazonSsmDescribeDocumentPermission DescribeDocumentPermissionXAmzTargetEnum = "AmazonSSM.DescribeDocumentPermission"
)

type DescribeDocumentPermissionHeaders struct {
	XAmzAlgorithm     *string                                  `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeDocumentPermissionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeDocumentPermissionRequest struct {
	Headers DescribeDocumentPermissionHeaders
	Request shared.DescribeDocumentPermissionRequest `request:"mediaType=application/json"`
}

type DescribeDocumentPermissionResponse struct {
	ContentType                        string
	DescribeDocumentPermissionResponse *shared.DescribeDocumentPermissionResponse
	InternalServerError                *interface{}
	InvalidDocument                    *interface{}
	InvalidDocumentOperation           *interface{}
	InvalidNextToken                   *interface{}
	InvalidPermissionType              *interface{}
	StatusCode                         int64
}
