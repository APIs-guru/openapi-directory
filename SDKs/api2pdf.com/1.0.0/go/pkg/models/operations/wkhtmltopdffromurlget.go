package operations

import (
	"openapi/pkg/models/shared"
)

type WkhtmltopdfFromURLGetQueryParams struct {
	Output *string `queryParam:"style=form,explode=true,name=output"`
	URL    string  `queryParam:"style=form,explode=true,name=url"`
}

type WkhtmltopdfFromURLGetSecurity struct {
	QueryAPIKey shared.SchemeQueryAPIKey `security:"scheme,type=apiKey,subtype=query"`
}

type WkhtmltopdfFromURLGetRequest struct {
	QueryParams WkhtmltopdfFromURLGetQueryParams
	Security    WkhtmltopdfFromURLGetSecurity
}

type WkhtmltopdfFromURLGetResponse struct {
	APIResponseFailure                                 *shared.APIResponseFailure
	APIResponseSuccess                                 *shared.APIResponseSuccess
	ContentType                                        string
	StatusCode                                         int64
	WkhtmltopdfFromURLGet200ApplicationPdfBinaryString []byte
}
