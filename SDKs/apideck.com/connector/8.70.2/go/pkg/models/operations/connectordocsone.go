package operations

import (
	"openapi/pkg/models/shared"
)

type ConnectorDocsOnePathParams struct {
	DocID string `pathParam:"style=simple,explode=false,name=doc_id"`
	ID    string `pathParam:"style=simple,explode=false,name=id"`
}

type ConnectorDocsOneHeaders struct {
	XApideckAppID string `header:"style=simple,explode=false,name=x-apideck-app-id"`
}

type ConnectorDocsOneSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type ConnectorDocsOneRequest struct {
	PathParams ConnectorDocsOnePathParams
	Headers    ConnectorDocsOneHeaders
	Security   ConnectorDocsOneSecurity
}

type ConnectorDocsOneResponse struct {
	ContentType                                   string
	NotFoundResponse                              *shared.NotFoundResponse
	PaymentRequiredResponse                       *shared.PaymentRequiredResponse
	StatusCode                                    int64
	UnauthorizedResponse                          *shared.UnauthorizedResponse
	UnexpectedErrorResponse                       *shared.UnexpectedErrorResponse
	ConnectorDocsOne200TextMarkdownMarkdownString *string
}
