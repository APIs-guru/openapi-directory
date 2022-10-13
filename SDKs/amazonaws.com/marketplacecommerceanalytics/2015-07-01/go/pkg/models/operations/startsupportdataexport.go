package operations

import (
	"openapi/pkg/models/shared"
)

type StartSupportDataExportXAmzTargetEnum string

const (
	StartSupportDataExportXAmzTargetEnumMarketplaceCommerceAnalytics20150701StartSupportDataExport StartSupportDataExportXAmzTargetEnum = "MarketplaceCommerceAnalytics20150701.StartSupportDataExport"
)

type StartSupportDataExportHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        StartSupportDataExportXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type StartSupportDataExportRequest struct {
	Headers StartSupportDataExportHeaders
	Request shared.StartSupportDataExportRequest `request:"mediaType=application/json"`
}

type StartSupportDataExportResponse struct {
	ContentType                           string
	MarketplaceCommerceAnalyticsException *interface{}
	StartSupportDataExportResult          *shared.StartSupportDataExportResult
	StatusCode                            int64
}
