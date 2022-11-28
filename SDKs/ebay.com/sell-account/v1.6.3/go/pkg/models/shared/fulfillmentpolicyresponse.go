package shared

// FulfillmentPolicyResponse
// The response payload for requests that return a list of fulfillment policies.
type FulfillmentPolicyResponse struct {
	FulfillmentPolicies []FulfillmentPolicy `json:"fulfillmentPolicies,omitempty"`
	Href                *string             `json:"href,omitempty"`
	Limit               *int32              `json:"limit,omitempty"`
	Next                *string             `json:"next,omitempty"`
	Offset              *int32              `json:"offset,omitempty"`
	Prev                *string             `json:"prev,omitempty"`
	Total               *int32              `json:"total,omitempty"`
}
