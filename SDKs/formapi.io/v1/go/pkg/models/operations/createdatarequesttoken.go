package operations

import (
	"openapi/pkg/models/shared"
)

type CreateDataRequestTokenPathParams struct {
	DataRequestID string `pathParam:"style=simple,explode=false,name=data_request_id"`
}

type CreateDataRequestTokenSecurity struct {
	APITokenBasic shared.SchemeAPITokenBasic `security:"scheme,type=http,subtype=basic"`
}

type CreateDataRequestTokenRequest struct {
	PathParams CreateDataRequestTokenPathParams
	Security   CreateDataRequestTokenSecurity
}

type CreateDataRequestTokenCreateSubmissionDataRequestTokenResponseStatusEnum string

const (
	CreateDataRequestTokenCreateSubmissionDataRequestTokenResponseStatusEnumSuccess CreateDataRequestTokenCreateSubmissionDataRequestTokenResponseStatusEnum = "success"
	CreateDataRequestTokenCreateSubmissionDataRequestTokenResponseStatusEnumError   CreateDataRequestTokenCreateSubmissionDataRequestTokenResponseStatusEnum = "error"
)

type CreateDataRequestTokenCreateSubmissionDataRequestTokenResponseToken struct {
	DataRequestURL string `json:"data_request_url"`
	ExpiresAt      string `json:"expires_at"`
	ID             string `json:"id"`
	Secret         string `json:"secret"`
}

type CreateDataRequestTokenCreateSubmissionDataRequestTokenResponse struct {
	Errors []string                                                                 `json:"errors,omitempty"`
	Status CreateDataRequestTokenCreateSubmissionDataRequestTokenResponseStatusEnum `json:"status"`
	Token  CreateDataRequestTokenCreateSubmissionDataRequestTokenResponseToken      `json:"token"`
}

type CreateDataRequestTokenResponse struct {
	ContentType                              string
	StatusCode                               int64
	AuthenticationError                      *shared.AuthenticationError
	CreateSubmissionDataRequestTokenResponse *CreateDataRequestTokenCreateSubmissionDataRequestTokenResponse
}
