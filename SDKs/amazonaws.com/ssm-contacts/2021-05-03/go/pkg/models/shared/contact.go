package shared

type Contact struct {
	Alias       string          `json:"Alias"`
	ContactArn  string          `json:"ContactArn"`
	DisplayName *string         `json:"DisplayName"`
	Type        ContactTypeEnum `json:"Type"`
}
