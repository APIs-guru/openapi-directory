package operations

import (
	"time"
)

type CreateAPIApplicationRequestBodyNewAPIApplication struct {
	ApplicationName                  *string    `json:"applicationName"`
	Enabled                          *bool      `json:"enabled"`
	Expiry                           *time.Time `json:"expiry"`
	Ican                             *int64     `json:"ican"`
	NumberOfPayeeApprovalsRequired   *int64     `json:"numberOfPayeeApprovalsRequired"`
	NumberOfPaymentApprovalsRequired *int64     `json:"numberOfPaymentApprovalsRequired"`
	Permissions                      []string   `json:"permissions"`
}

type CreateAPIApplicationRequest struct {
	Request CreateAPIApplicationRequestBodyNewAPIApplication `request:"mediaType=application/json"`
}

type CreateAPIApplication200ApplicationJSONAPIApplication struct {
	ApplicationID                    *int64     `json:"applicationId"`
	ClientID                         *string    `json:"clientId"`
	ClientKey                        *string    `json:"clientKey"`
	Enabled                          *bool      `json:"enabled"`
	Expiry                           *time.Time `json:"expiry"`
	Ican                             *int64     `json:"ican"`
	NumberOfPayeeApprovalsRequired   *int64     `json:"numberOfPayeeApprovalsRequired"`
	NumberOfPaymentApprovalsRequired *int64     `json:"numberOfPaymentApprovalsRequired"`
	RefreshToken                     *string    `json:"refreshToken"`
}

type CreateAPIApplicationResponse struct {
	APIApplication *CreateAPIApplication200ApplicationJSONAPIApplication
	ContentType    string
	StatusCode     int64
}
