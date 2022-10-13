package operations

import (
	"openapi/pkg/models/shared"
)

type PutCustomPagesHomepageInstanceRequestBody struct {
	Content *string `json:"content"`
}

type PutCustomPagesHomepageInstanceSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PutCustomPagesHomepageInstanceRequest struct {
	Request  *PutCustomPagesHomepageInstanceRequestBody `request:"mediaType=application/json"`
	Security PutCustomPagesHomepageInstanceSecurity
}

type PutCustomPagesHomepageInstanceResponse struct {
	ContentType string
	StatusCode  int64
}
