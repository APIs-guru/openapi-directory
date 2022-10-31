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

type FetchFieldsSecurityOption1 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type FetchFieldsSecurityOption2 struct {
	Oauth2AuthorizationCode shared.SchemeOauth2AuthorizationCode `security:"scheme,type=oauth2"`
}

type FetchFieldsSecurity struct {
	Option1 *FetchFieldsSecurityOption1 `security:"option"`
	Option2 *FetchFieldsSecurityOption2 `security:"option"`
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
