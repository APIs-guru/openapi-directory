package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type UpdateReadTimestampPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type UpdateReadTimestampRequestBody struct {
	Timestamp time.Time `form:"name=timestamp"`
}

type UpdateReadTimestampSecurity struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type UpdateReadTimestampRequest struct {
	PathParams UpdateReadTimestampPathParams
	Request    UpdateReadTimestampRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateReadTimestampSecurity
}

type UpdateReadTimestampResponse struct {
	ContentType string
	StatusCode  int64
}
