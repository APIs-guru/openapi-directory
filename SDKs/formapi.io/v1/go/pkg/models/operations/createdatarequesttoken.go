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

type CreateDataRequestToken201ApplicationJSONStatusEnum string

const (
	CreateDataRequestToken201ApplicationJSONStatusEnumSuccess CreateDataRequestToken201ApplicationJSONStatusEnum = "success"
	CreateDataRequestToken201ApplicationJSONStatusEnumError   CreateDataRequestToken201ApplicationJSONStatusEnum = "error"
)

type CreateDataRequestToken201ApplicationJSONToken struct {
	DataRequestURL string `json:"data_request_url"`
	ExpiresAt      string `json:"expires_at"`
	ID             string `json:"id"`
	Secret         string `json:"secret"`
}

type CreateDataRequestToken201ApplicationJSONCreateSubmissionDataRequestTokenResponse struct {
	Errors []string                                           `json:"errors,omitempty"`
	Status CreateDataRequestToken201ApplicationJSONStatusEnum `json:"status"`
	Token  CreateDataRequestToken201ApplicationJSONToken      `json:"token"`
}

type CreateDataRequestTokenResponse struct {
	ContentType                              string
	StatusCode                               int64
	AuthenticationError                      *shared.AuthenticationError
	CreateSubmissionDataRequestTokenResponse *CreateDataRequestToken201ApplicationJSONCreateSubmissionDataRequestTokenResponse
}
