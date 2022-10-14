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
	Article  *shared.Article            `json:"article,omitempty"`
	Company  *shared.ContentProCompany  `json:"company,omitempty"`
	Snippets *shared.ContentProSnippets `json:"snippets,omitempty"`
}

type PostContentproSimilarText200ApplicationJSON struct {
	CallsPerMonth  *string                                           `json:"calls_per_month,omitempty"`
	CountRemaining *string                                           `json:"count_remaining,omitempty"`
	Data           []PostContentproSimilarText200ApplicationJSONData `json:"data,omitempty"`
	RenewalDate    *string                                           `json:"renewal_date,omitempty"`
}

type PostContentproSimilarTextResponse struct {
	ContentType                                       string
	PostContentproSimilarText200ApplicationJSONObject *PostContentproSimilarText200ApplicationJSON
	StatusCode                                        int64
}
