package shared

type CharitySearchResponse struct {
	CharityOrgs []CharityOrg `json:"charityOrgs,omitempty"`
	Href        *string      `json:"href,omitempty"`
	Limit       *int32       `json:"limit,omitempty"`
	Next        *string      `json:"next,omitempty"`
	Offset      *int32       `json:"offset,omitempty"`
	Prev        *string      `json:"prev,omitempty"`
	Total       *int32       `json:"total,omitempty"`
}
