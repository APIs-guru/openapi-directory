package operations

import (
	"openapi/pkg/models/shared"
)

type GetReportMetadataSecurity struct {
	APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
}

type GetReportMetadataRequest struct {
	Security GetReportMetadataSecurity
}

type GetReportMetadataResponse struct {
	ContentType     string
	ReportMetadatas *shared.ReportMetadatas
	StatusCode      int64
}
