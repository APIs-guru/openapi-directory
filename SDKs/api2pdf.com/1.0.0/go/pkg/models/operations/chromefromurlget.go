package operations

import (
	"openapi/pkg/models/shared"
)

type ChromeFromURLGetQueryParams struct {
	Output *string `queryParam:"style=form,explode=true,name=output"`
	URL    string  `queryParam:"style=form,explode=true,name=url"`
}

type ChromeFromURLGetSecurity struct {
	QueryAPIKey shared.SchemeQueryAPIKey `security:"scheme,type=apiKey,subtype=query"`
}

type ChromeFromURLGetRequest struct {
	QueryParams ChromeFromURLGetQueryParams
	Security    ChromeFromURLGetSecurity
}

type ChromeFromURLGetResponse struct {
	APIResponseFailure                            *shared.APIResponseFailure
	APIResponseSuccess                            *shared.APIResponseSuccess
	ContentType                                   string
	StatusCode                                    int64
	ChromeFromURLGet200ApplicationPdfBinaryString []byte
}
