package operations

import (
	"openapi/pkg/models/shared"
)

type HealthGetCacheSecurity struct {
	Key     shared.SchemeKey     `security:"scheme,type=apiKey,subtype=header"`
	Project shared.SchemeProject `security:"scheme,type=apiKey,subtype=header"`
}

type HealthGetCacheRequest struct {
	Security HealthGetCacheSecurity
}

type HealthGetCacheResponse struct {
	ContentType string
	StatusCode  int64
}
