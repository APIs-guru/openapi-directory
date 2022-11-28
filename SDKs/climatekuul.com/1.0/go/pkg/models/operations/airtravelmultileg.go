package operations

import (
	"openapi/pkg/models/shared"
)

var AirtravelMultilegServerList = []string{
	"http://api.climatekuul.com:8000/footprint",
}

type AirtravelMultilegRequest struct {
	ServerURL *string
	Request   shared.AirtravelMultilegRequest `request:"mediaType=application/json"`
}

type AirtravelMultilegResponse struct {
	ContentType string
	StatusCode  int64
}
