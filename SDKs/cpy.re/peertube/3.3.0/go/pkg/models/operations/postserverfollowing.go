package operations

import (
	"openapi/pkg/models/shared"
)

type PostServerFollowingRequestBody struct {
	Handles []string `json:"handles,omitempty"`
	Hosts   []string `json:"hosts,omitempty"`
}

type PostServerFollowingSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PostServerFollowingRequest struct {
	Request  *PostServerFollowingRequestBody `request:"mediaType=application/json"`
	Security PostServerFollowingSecurity
}

type PostServerFollowingResponse struct {
	ContentType string
	StatusCode  int64
}
