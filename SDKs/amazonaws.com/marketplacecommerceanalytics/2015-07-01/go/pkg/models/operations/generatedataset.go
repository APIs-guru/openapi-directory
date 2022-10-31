package operations

import (
	"openapi/pkg/models/shared"
)

type GenerateDataSetXAmzTargetEnum string

const (
	GenerateDataSetXAmzTargetEnumMarketplaceCommerceAnalytics20150701GenerateDataSet GenerateDataSetXAmzTargetEnum = "MarketplaceCommerceAnalytics20150701.GenerateDataSet"
)

type GenerateDataSetHeaders struct {
	XAmzAlgorithm     *string                       `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GenerateDataSetXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
