package operations

import (
	"openapi/pkg/models/shared"
)

type FunctionsCreateRequestBody struct {
	Events   []string               `json:"events,omitempty"`
	Execute  []string               `json:"execute"`
	Name     string                 `json:"name"`
	Runtime  string                 `json:"runtime"`
	Schedule *string                `json:"schedule,omitempty"`
	Timeout  *int64                 `json:"timeout,omitempty"`
	Vars     map[string]interface{} `json:"vars,omitempty"`
}

type FunctionsCreateSecurity struct {
	Key     shared.SchemeKey     `security:"scheme,type=apiKey,subtype=header"`
	Project shared.SchemeProject `security:"scheme,type=apiKey,subtype=header"`
}

type FunctionsCreateRequest struct {
	Request  *FunctionsCreateRequestBody `request:"mediaType=application/json"`
	Security FunctionsCreateSecurity
}

type FunctionsCreateResponse struct {
	ContentType string
	StatusCode  int64
	Function    *shared.Function
}
