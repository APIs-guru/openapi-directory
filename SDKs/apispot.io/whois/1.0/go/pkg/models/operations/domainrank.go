package operations

type DomainRankPathParams struct {
	Domain string `pathParam:"style=simple,explode=false,name=domain"`
}

type DomainRankRequest struct {
	PathParams DomainRankPathParams
}

type DomainRank200ApplicationJSON struct {
	Rank *float64 `json:"rank,omitempty"`
}

type DomainRankResponse struct {
	ContentType                        string
	StatusCode                         int64
	DomainRank200ApplicationJSONObject *DomainRank200ApplicationJSON
}
