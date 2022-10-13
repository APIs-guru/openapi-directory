package operations

import (
	"openapi/pkg/models/shared"
)

type GetDataSourceXAmzTargetEnum string

const (
	GetDataSourceXAmzTargetEnumAmazonMl20141212GetDataSource GetDataSourceXAmzTargetEnum = "AmazonML_20141212.GetDataSource"
)

type GetDataSourceHeaders struct {
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetDataSourceXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetDataSourceRequest struct {
	Headers GetDataSourceHeaders
	Request shared.GetDataSourceInput `request:"mediaType=application/json"`
}

type GetDataSourceResponse struct {
	ContentType               string
	GetDataSourceOutput       *shared.GetDataSourceOutput
	InternalServerException   *interface{}
	InvalidInputException     *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
