package operations

import (
	"openapi/pkg/models/shared"
)

type DiscoverInputSchemaXAmzTargetEnum string

const (
	DiscoverInputSchemaXAmzTargetEnumKinesisAnalytics20150814DiscoverInputSchema DiscoverInputSchemaXAmzTargetEnum = "KinesisAnalytics_20150814.DiscoverInputSchema"
)

type DiscoverInputSchemaHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DiscoverInputSchemaXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DiscoverInputSchemaRequest struct {
	Headers DiscoverInputSchemaHeaders
	Request shared.DiscoverInputSchemaRequest `request:"mediaType=application/json"`
}

type DiscoverInputSchemaResponse struct {
	ContentType                                    string
	DiscoverInputSchemaResponse                    *shared.DiscoverInputSchemaResponse
	InvalidArgumentException                       *interface{}
	ResourceProvisionedThroughputExceededException *interface{}
	ServiceUnavailableException                    *interface{}
	StatusCode                                     int64
	UnableToDetectSchemaException                  *interface{}
}
