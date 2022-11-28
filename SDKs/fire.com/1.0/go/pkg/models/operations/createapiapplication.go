package operations

import (
	"time"
)

type CreateAPIApplicationNewAPIApplication struct {
	ApplicationName                  *string    `json:"applicationName,omitempty"`
	Enabled                          *bool      `json:"enabled,omitempty"`
	Expiry                           *time.Time `json:"expiry,omitempty"`
	Ican                             *int64     `json:"ican,omitempty"`
	NumberOfPayeeApprovalsRequired   *int64     `json:"numberOfPayeeApprovalsRequired,omitempty"`
	NumberOfPaymentApprovalsRequired *int64     `json:"numberOfPaymentApprovalsRequired,omitempty"`
	Permissions                      []string   `json:"permissions,omitempty"`
}

type CreateAPIApplicationAPIApplication struct {
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

type CreateAPIApplicationRequest struct {
	Request CreateAPIApplicationNewAPIApplication `request:"mediaType=application/json"`
}

type CreateAPIApplicationResponse struct {
	APIApplication *CreateAPIApplicationAPIApplication
	ContentType    string
	StatusCode     int64
}
