package shared

type ListGrantsRequest struct {
	GrantID          *string `json:"GrantId,omitempty"`
	GranteePrincipal *string `json:"GranteePrincipal,omitempty"`
	KeyID            string  `json:"KeyId"`
	Limit            *int64  `json:"Limit,omitempty"`
	Marker           *string `json:"Marker,omitempty"`
}
