package operations

import (
	"openapi/pkg/models/shared"
)

type HealthGetSecurity struct {
	Key     shared.SchemeKey     `security:"scheme,type=apiKey,subtype=header"`
	Project shared.SchemeProject `security:"scheme,type=apiKey,subtype=header"`
}

type HealthGetRequest struct {
	Security HealthGetSecurity
}

type HealthGetResponse struct {
	ContentType string
	StatusCode  int64
}
