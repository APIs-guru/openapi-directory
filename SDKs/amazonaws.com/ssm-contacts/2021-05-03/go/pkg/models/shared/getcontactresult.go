package shared

type GetContactResult struct {
	Alias       string          `json:"Alias"`
	ContactArn  string          `json:"ContactArn"`
	DisplayName *string         `json:"DisplayName"`
	Plan        Plan            `json:"Plan"`
	Type        ContactTypeEnum `json:"Type"`
}
