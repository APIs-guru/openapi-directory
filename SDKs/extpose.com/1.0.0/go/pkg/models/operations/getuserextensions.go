package operations

import (
	"openapi/pkg/models/shared"
)

type GetUserExtensionsSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetUserExtensionsRequest struct {
	Security GetUserExtensionsSecurity
}

type GetUserExtensionsResponse struct {
	ContentType string
	Extensions  []shared.Extension
	StatusCode  int64
}
