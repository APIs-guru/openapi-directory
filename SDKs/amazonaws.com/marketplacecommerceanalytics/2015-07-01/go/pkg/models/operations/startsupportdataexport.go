package operations

import (
	"openapi/pkg/models/shared"
)

type StartSupportDataExportXAmzTargetEnum string

const (
	StartSupportDataExportXAmzTargetEnumMarketplaceCommerceAnalytics20150701StartSupportDataExport StartSupportDataExportXAmzTargetEnum = "MarketplaceCommerceAnalytics20150701.StartSupportDataExport"
)

type StartSupportDataExportHeaders struct {
	XAmzAlgorithm     *string                              `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        StartSupportDataExportXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
