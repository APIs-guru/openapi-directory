package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateDataSourceXAmzTargetEnum string

const (
	UpdateDataSourceXAmzTargetEnumAmazonMl20141212UpdateDataSource UpdateDataSourceXAmzTargetEnum = "AmazonML_20141212.UpdateDataSource"
)

type UpdateDataSourceHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateDataSourceXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateDataSourceRequest struct {
	Headers UpdateDataSourceHeaders
	Request shared.UpdateDataSourceInput `request:"mediaType=application/json"`
}

type UpdateDataSourceResponse struct {
	ContentType               string
	InternalServerException   *interface{}
	InvalidInputException     *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	UpdateDataSourceOutput    *shared.UpdateDataSourceOutput
}
