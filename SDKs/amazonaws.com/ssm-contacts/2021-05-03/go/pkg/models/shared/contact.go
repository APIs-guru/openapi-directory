package shared

type Contact struct {
	Alias       string          `json:"Alias"`
	ContactArn  string          `json:"ContactArn"`
	DisplayName *string         `json:"DisplayName,omitempty"`
	Type        ContactTypeEnum `json:"Type"`
}
