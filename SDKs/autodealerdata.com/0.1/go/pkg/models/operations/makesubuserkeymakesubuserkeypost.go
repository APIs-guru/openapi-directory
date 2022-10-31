package operations

import (
	"openapi/pkg/models/shared"
)

type MakeSubUserKeyMakeSubUserKeyPostQueryParams struct {
	APIID    string  `queryParam:"style=form,explode=true,name=apiID"`
	APIKey   string  `queryParam:"style=form,explode=true,name=apiKey"`
	SiteName *string `queryParam:"style=form,explode=true,name=siteName"`
}

type MakeSubUserKeyMakeSubUserKeyPostRequest struct {
	QueryParams MakeSubUserKeyMakeSubUserKeyPostQueryParams
	Request     shared.EndpointList `request:"mediaType=application/json"`
}

type MakeSubUserKeyMakeSubUserKeyPostResponse struct {
	ContentType         string
	HTTPValidationError *shared.HTTPValidationError
	StatusCode          int64
	SubUserJSONWebToken *shared.SubUserJSONWebToken
}
