package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateS3ResourcesXAmzTargetEnum string

const (
	UpdateS3ResourcesXAmzTargetEnumMacieServiceUpdateS3Resources UpdateS3ResourcesXAmzTargetEnum = "MacieService.UpdateS3Resources"
)

type UpdateS3ResourcesHeaders struct {
	XAmzAlgorithm     *string                         `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateS3ResourcesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type UpdateS3ResourcesRequest struct {
	Headers UpdateS3ResourcesHeaders
	Request shared.UpdateS3ResourcesRequest `request:"mediaType=application/json"`
}

type UpdateS3ResourcesResponse struct {
	AccessDeniedException   *interface{}
	ContentType             string
	InternalException       *interface{}
	InvalidInputException   *interface{}
	StatusCode              int64
	UpdateS3ResourcesResult *shared.UpdateS3ResourcesResult
}
