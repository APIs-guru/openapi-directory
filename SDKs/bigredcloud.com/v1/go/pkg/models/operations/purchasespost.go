package operations

import (
	"openapi/pkg/models/shared"
)

type PurchasesPostRequest struct {
	Request shared.PurchaseDto `request:"mediaType=application/json"`
}

type PurchasesPostResponse struct {
	ContentType                           string
	PurchasesPost200ApplicationJSONObject map[string]interface{}
	StatusCode                            int64
}
