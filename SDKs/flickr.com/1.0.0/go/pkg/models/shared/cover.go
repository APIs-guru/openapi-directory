package shared

type Cover struct {
	Farm     *string `json:"farm"`
	ID       *string `json:"id"`
	Isfamily *bool   `json:"isfamily"`
	Isfriend *bool   `json:"isfriend"`
	Ispublic *bool   `json:"ispublic"`
	Owner    *string `json:"owner"`
	Secret   *string `json:"secret"`
	Server   *string `json:"server"`
	Title    *string `json:"title"`
	Y        *string `json:"y"`
}
