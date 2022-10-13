package operations

import (
	"openapi/pkg/models/shared"
)

type GenerateDataSetXAmzTargetEnum string

const (
	GenerateDataSetXAmzTargetEnumMarketplaceCommerceAnalytics20150701GenerateDataSet GenerateDataSetXAmzTargetEnum = "MarketplaceCommerceAnalytics20150701.GenerateDataSet"
)

type GenerateDataSetHeaders struct {
	XAmzAlgorithm     *string                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GenerateDataSetXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GenerateDataSetRequest struct {
	Headers GenerateDataSetHeaders
	Request shared.GenerateDataSetRequest `request:"mediaType=application/json"`
}

type GenerateDataSetResponse struct {
	ContentType                           string
	GenerateDataSetResult                 *shared.GenerateDataSetResult
	MarketplaceCommerceAnalyticsException *interface{}
	StatusCode                            int64
}
