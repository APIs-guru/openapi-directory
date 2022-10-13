package operations

import (
	"openapi/pkg/models/shared"
)

type PostContentproSimilarTextRequestBody struct {
	Text string `json:"text"`
}

type PostContentproSimilarTextRequest struct {
	Request PostContentproSimilarTextRequestBody `request:"mediaType=application/json"`
}

type PostContentproSimilarText200ApplicationJSONData struct {
	Article  *shared.Article            `json:"article"`
	Company  *shared.ContentProCompany  `json:"company"`
	Snippets *shared.ContentProSnippets `json:"snippets"`
}

type PostContentproSimilarText200ApplicationJSON struct {
	CallsPerMonth  *string                                           `json:"calls_per_month"`
	CountRemaining *string                                           `json:"count_remaining"`
	Data           []PostContentproSimilarText200ApplicationJSONData `json:"data"`
	RenewalDate    *string                                           `json:"renewal_date"`
}

type PostContentproSimilarTextResponse struct {
	ContentType                                       string
	PostContentproSimilarText200ApplicationJSONObject *PostContentproSimilarText200ApplicationJSON
	StatusCode                                        int64
}
