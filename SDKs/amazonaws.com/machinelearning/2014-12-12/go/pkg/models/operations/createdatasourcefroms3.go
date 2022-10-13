package operations

import (
	"openapi/pkg/models/shared"
)

type CreateDataSourceFromS3XAmzTargetEnum string

const (
	CreateDataSourceFromS3XAmzTargetEnumAmazonMl20141212CreateDataSourceFromS3 CreateDataSourceFromS3XAmzTargetEnum = "AmazonML_20141212.CreateDataSourceFromS3"
)

type CreateDataSourceFromS3Headers struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateDataSourceFromS3XAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateDataSourceFromS3Request struct {
	Headers CreateDataSourceFromS3Headers
	Request shared.CreateDataSourceFromS3Input `request:"mediaType=application/json"`
}

type CreateDataSourceFromS3Response struct {
	ContentType                          string
	CreateDataSourceFromS3Output         *shared.CreateDataSourceFromS3Output
	IdempotentParameterMismatchException *interface{}
	InternalServerException              *interface{}
	InvalidInputException                *interface{}
	StatusCode                           int64
}
