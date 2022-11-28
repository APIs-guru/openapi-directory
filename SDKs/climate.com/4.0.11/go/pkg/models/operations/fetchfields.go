package operations

import (
	"openapi/pkg/models/shared"
)

type FetchFieldsQueryParams struct {
	FieldName *string `queryParam:"style=form,explode=true,name=fieldName"`
}

type FetchFieldsHeaders struct {
	XLimit     *int32  `header:"style=simple,explode=false,name=X-Limit"`
	XNextToken *string `header:"style=simple,explode=false,name=X-Next-Token"`
}

type FetchFieldsSecurity struct {
	APIKey                  *shared.SchemeAPIKey                  `security:"scheme,type=apiKey,subtype=header"`
	Oauth2AuthorizationCode *shared.SchemeOauth2AuthorizationCode `security:"scheme,type=oauth2"`
}

type FetchFieldsRequest struct {
	QueryParams FetchFieldsQueryParams
	Headers     FetchFieldsHeaders
	Security    FetchFieldsSecurity
}

type FetchFieldsResponse struct {
	ContentType string
	Empty       map[string]interface{}
	Error       *shared.Error
	Fields      *interface{}
	Headers     map[string][]string
	StatusCode  int64
}
