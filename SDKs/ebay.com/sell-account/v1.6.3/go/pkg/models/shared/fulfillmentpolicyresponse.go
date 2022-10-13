package shared

type FulfillmentPolicyResponse struct {
	FulfillmentPolicies []FulfillmentPolicy `json:"fulfillmentPolicies"`
	Href                *string             `json:"href"`
	Limit               *int32              `json:"limit"`
	Next                *string             `json:"next"`
	Offset              *int32              `json:"offset"`
	Prev                *string             `json:"prev"`
	Total               *int32              `json:"total"`
}
