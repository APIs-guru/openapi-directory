package operations

import (
	"openapi/pkg/models/shared"
)

type CreateDataSourceFromRedshiftXAmzTargetEnum string

const (
	CreateDataSourceFromRedshiftXAmzTargetEnumAmazonMl20141212CreateDataSourceFromRedshift CreateDataSourceFromRedshiftXAmzTargetEnum = "AmazonML_20141212.CreateDataSourceFromRedshift"
)

type CreateDataSourceFromRedshiftHeaders struct {
	XAmzAlgorithm     *string                                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateDataSourceFromRedshiftXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type CreateDataSourceFromRedshiftRequest struct {
	Headers CreateDataSourceFromRedshiftHeaders
	Request shared.CreateDataSourceFromRedshiftInput `request:"mediaType=application/json"`
}

type CreateDataSourceFromRedshiftResponse struct {
	ContentType                          string
	CreateDataSourceFromRedshiftOutput   *shared.CreateDataSourceFromRedshiftOutput
	IdempotentParameterMismatchException *interface{}
	InternalServerException              *interface{}
	InvalidInputException                *interface{}
	StatusCode                           int64
}
