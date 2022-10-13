package shared

type ListGrantsRequest struct {
	GrantID          *string `json:"GrantId"`
	GranteePrincipal *string `json:"GranteePrincipal"`
	KeyID            string  `json:"KeyId"`
	Limit            *int64  `json:"Limit"`
	Marker           *string `json:"Marker"`
}
