package operations

import (
	"time"
)

type CreateAPIApplicationRequestBodyNewAPIApplication struct {
	ApplicationName                  *string    `json:"applicationName,omitempty"`
	Enabled                          *bool      `json:"enabled,omitempty"`
	Expiry                           *time.Time `json:"expiry,omitempty"`
	Ican                             *int64     `json:"ican,omitempty"`
	NumberOfPayeeApprovalsRequired   *int64     `json:"numberOfPayeeApprovalsRequired,omitempty"`
	NumberOfPaymentApprovalsRequired *int64     `json:"numberOfPaymentApprovalsRequired,omitempty"`
	Permissions                      []string   `json:"permissions,omitempty"`
}

type CreateAPIApplicationRequest struct {
	Request CreateAPIApplicationRequestBodyNewAPIApplication `request:"mediaType=application/json"`
}

type CreateAPIApplication200ApplicationJSONAPIApplication struct {
	ApplicationID                    *int64     `json:"applicationId,omitempty"`
	ClientID                         *string    `json:"clientId,omitempty"`
	ClientKey                        *string    `json:"clientKey,omitempty"`
	Enabled                          *bool      `json:"enabled,omitempty"`
	Expiry                           *time.Time `json:"expiry,omitempty"`
	Ican                             *int64     `json:"ican,omitempty"`
	NumberOfPayeeApprovalsRequired   *int64     `json:"numberOfPayeeApprovalsRequired,omitempty"`
	NumberOfPaymentApprovalsRequired *int64     `json:"numberOfPaymentApprovalsRequired,omitempty"`
	RefreshToken                     *string    `json:"refreshToken,omitempty"`
}

type CreateAPIApplicationResponse struct {
	APIApplication *CreateAPIApplication200ApplicationJSONAPIApplication
	ContentType    string
	StatusCode     int64
}
