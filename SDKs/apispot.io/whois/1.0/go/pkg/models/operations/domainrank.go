package operations

type DomainRankPathParams struct {
	Domain string `pathParam:"style=simple,explode=false,name=domain"`
}

type DomainRank200ApplicationJSON struct {
	Rank *float64 `json:"rank,omitempty"`
}

type DomainRankRequest struct {
	PathParams DomainRankPathParams
}

type DomainRankResponse struct {
	ContentType                        string
	StatusCode                         int64
	DomainRank200ApplicationJSONObject *DomainRank200ApplicationJSON
}
