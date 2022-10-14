package shared

type Cover struct {
	Farm     *string `json:"farm,omitempty"`
	ID       *string `json:"id,omitempty"`
	Isfamily *bool   `json:"isfamily,omitempty"`
	Isfriend *bool   `json:"isfriend,omitempty"`
	Ispublic *bool   `json:"ispublic,omitempty"`
	Owner    *string `json:"owner,omitempty"`
	Secret   *string `json:"secret,omitempty"`
	Server   *string `json:"server,omitempty"`
	Title    *string `json:"title,omitempty"`
	Y        *string `json:"y,omitempty"`
}
