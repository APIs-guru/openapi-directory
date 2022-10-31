package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteDataSourceXAmzTargetEnum string

const (
	DeleteDataSourceXAmzTargetEnumAmazonMl20141212DeleteDataSource DeleteDataSourceXAmzTargetEnum = "AmazonML_20141212.DeleteDataSource"
)

type DeleteDataSourceHeaders struct {
	XAmzAlgorithm     *string                        `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteDataSourceXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DeleteDataSourceRequest struct {
	Headers DeleteDataSourceHeaders
	Request shared.DeleteDataSourceInput `request:"mediaType=application/json"`
}

type DeleteDataSourceResponse struct {
	ContentType               string
	DeleteDataSourceOutput    *shared.DeleteDataSourceOutput
	InternalServerException   *interface{}
	InvalidInputException     *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
