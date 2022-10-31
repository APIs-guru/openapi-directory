package operations

import (
	"openapi/pkg/models/shared"
)

type Destiny2SetQuestTrackedStateSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type Destiny2SetQuestTrackedStateRequest struct {
	Security Destiny2SetQuestTrackedStateSecurity
}

type Destiny2SetQuestTrackedStateResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
